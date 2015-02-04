/**
 * Created by reedanderson on 2/3/15.
 */
angular.module('RegDashboard.Dashboard')
    .service('regModel', function () {
        var service = this,
            regs = [
                {title: '指导案例26号：李健雄诉广东省交通运输厅政府信息公开案', court: ' 广东省广州市越秀区', instance: '一审', date: '2011-08-24'},
                {title: '指导案例25号：华泰财产保险有限公司北京分公司诉李志贵、天安财产保险股份有限公司河北省分公司张家口支公司保险人代位求偿权纠纷案', court: ' 北京市东城区', instance: '一审', date: '2014-01-26'},
                {title: '指导案例24号：荣宝英诉王阳、永诚财产保险股份有限公司江阴支公司机动车交通事故责任纠纷案', court: '江苏省无锡市滨湖区', instance: '一审', date: '2013-02-08'}
            ];

        service.getRegs = function (){
            return regs;
        }
    });