import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';

export default class Axios {
    static jsonp(options) {
        new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status === 'success') {
                    resolve(response);
                }
                else {
                    reject(response.message);
                }
            })
        })
    };
    static ajax(options) {
        return new Promise((resolve, reject) => {
            let baseApi = "https://www.easy-mock.com/mock/5c7b99d5d764b271d20acaeb/gmsapi";
            axios({
                url: options.url,
                method: options.method || 'get',
                baseURL: baseApi,
                timeout: 5000,
                params: (options.data && options.data.param) || '',
            }).then((response) => {
                if (response.status === 200) {
                    let res = response.data;
                    if (res.code === 0) {
                        resolve(res)
                    }
                    else {
                        Modal.info({
                            title: '提示',
                            content: res.msg
                        });
                    }
                }
                else {
                    reject(response.data);
                }
            }).catch(function (error) {
                console.log(error);
                reject();
            });
        })
    }
}