import { Button, CommonEventFunction, Form, Image, View } from '@tarojs/components';
import { ButtonProps } from '@tarojs/components/types/Button';
import Taro from '@tarojs/taro';
import React, { Component } from 'react';
import './ence_push.scss';

// eslint-disable-next-line import/no-commonjs
let PUSH = require('../../../utils/push_conf.js');

let api = 'http://openapi2.xiaoshentui.com/'

let isOver = false;

interface State {
  avatarurl: string
  nickname: string
}

export default class Ence_push extends Component<Readonly<{}>, State> {
    // eslint-disable-next-line react/sort-comp
    public _this: any;

    constructor (props: Readonly<{}>) {
        super(props);
        this.state = {
            avatarurl: '',
            nickname: ''
        }

        if (Taro.getStorageSync('push_avatarurl') && Taro.getStorageSync('push_nickname')){
            this.setState({
                avatarurl: wx.getStorageSync('push_avatarurl'),
                nickname: wx.getStorageSync('push_nickname')
            })
        }
    }

    componentDidShow() {
    }

    onGotUserInfo: CommonEventFunction<ButtonProps.onGetUserInfoEventDetail> =(e) => {
        this.setState({
            avatarurl: e.detail.userInfo.avatarUrl,
            nickname: e.detail.userInfo.nickName
        })
        Taro.setStorageSync('push_avatarurl', e.detail.userInfo.avatarUrl)
        Taro.setStorageSync('push_nickname', e.detail.userInfo.nickName)
    }

    subscribe = () => {
        if (!wx.getStorageSync('ald_push_openid')) {
            return this.debugModel('openid未上报');
        };
        if (isOver) return;
        isOver = true;
        if (!this.isSubscribe()){
            return this._this.debugModel('基础库版本不支持订阅消息');
        }
        let _this = this;
        let data: any = {
            avatarurl: this.state.avatarurl,
            nickname: this.state.nickname,
            app_key: PUSH.app_key,
            openid: wx.getStorageSync('ald_push_openid')
        }
        Taro.request({
            url: api + 'api/v1/getpt',
            data: {
                app_key: PUSH.app_key
            },
            method: 'POST',
            success(res) {
                let tlis = res.data.data.list.map(function(item){
                    return item.template_id;
                })
                Taro.requestSubscribeMessage({
                    tmplIds: tlis,
                    success(_res) {
                        let tmplIdsArr: string[] = [];
                        for (let i in _res) {
                            if (_res[i] === 'accept') {
                                tmplIdsArr.push(i);
                            }
                        }
                        if (!tmplIdsArr.length) {
                            isOver = false;
                            return _this.debugModel('未订阅模版');
                        }
                        data.tlis = tmplIdsArr;
                        Taro.request({
                            url: api + 'api/v1/reportdt',
                            data: data,
                            method: 'POST',
                            success: function (__res) {
                                isOver = false;
                                _this.debugModel('订阅成功');
                            },
                            fail() {
                                isOver = false;
                                _this.debugModel('订阅成功模版上报失败');
                            }
                        })
                    },
                    fail() {
                        isOver = false;
                        _this.debugModel('订阅失败');
                    }
                })
            },
            fail() {
                isOver = false;
                _this.debugModel('获取模版ID请求失败');
            }
        });
    }

    isSubscribe() {
        var SyStemRes = Taro.getSystemInfoSync();
        if (typeof SyStemRes.SDKVersion !== 'undefined') {
            let v = parseInt(SyStemRes.SDKVersion.split('.').join(''));
            if (v >= 282) {
                return true;
            }
            return false;
        }
        return false;
    }

    debugModel(msg) {
      Taro.showModal({
            title: '小神推提示',
            content: msg,
        });
    }

    render() {
        let btn1 = <Button className='form_box_btn_' open-type='getUserInfo' onGetUserInfo={this.onGotUserInfo} >上报您的头像昵称</Button>
        let btn2 = <Button className='form_box_btn' onClick={this.subscribe} >订阅</Button>

        return (
            <View>
                <View className='wrap'>
                    <View className='wrap_title'>
                        <View className='wrap_title_top topstyle'>欢迎来到测试体验！</View>
                        <View className='wrap_title_top'>点击体验按钮，获取体验资格。</View>
                    </View>
                    <View className='wrap_middle'>
                        <Image src='https://openapi.xiaoshentui.com/push_sdk_img/ence-push_test.png' />
                    </View>
                    <View className='wrap_bottom'>
                        <Form className='form_box'>
                            <View className='wrap_bottom_img'>
                                <View className='wrap_bottom_btn'>
                                    {
                                        (this.state.avatarurl && this.state.nickname) ? btn2 : btn1
                                    }
                                </View>
                            </View>
                        </Form>
                    </View>
                </View>
            </View>
        )
    }
}
