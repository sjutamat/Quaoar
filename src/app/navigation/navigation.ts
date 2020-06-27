import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    //{
    //    id       : 'applications',
    //    title    : 'Applications',
    //    translate: 'NAV.APPLICATIONS',
    //    type     : 'group',
    //    children : [
    //        {
    //            id       : 'sample',
    //            title    : 'Sample',
    //            translate: 'NAV.SAMPLE.TITLE',
    //            type     : 'item',
    //            icon     : 'email',
    //            url      : '/sample',
    //            badge    : {
    //                title    : '25',
    //                translate: 'NAV.SAMPLE.BADGE',
    //                bg       : '#F44336',
    //                fg       : '#FFFFFF'
    //            }
    //        }
    //    ]
    //}
    
    {
        'id'       : 'home',
        'title'    : 'หน้าหลัก',
        'translate': 'NAV.HOME.TITLE',
        'type'     : 'item',
        'icon'     : 'home',
        'url'      : '/home'
    },
    {
        'id'       : 'lottery',
        'title'    : 'แทงหวย',
        'translate': 'NAV.LOTTERY.TITLE',
        'type'     : 'item',
        'icon'     : 'games',
        'url'      : '/lottery'
    },
    {
        'id'       : 'orders',
        'title'    : 'รายการโพย',
        'translate': 'NAV.ORDERS.TITLE',
        'type'     : 'item',
        'icon'     : 'format_list_bulleted',
        'url'      : '/orders'
    },
    {
        'id'       : 'award',
        'title'    : 'ดูผลรางวัล',
        'translate': 'NAV.AWARD.TITLE',
        'type'     : 'item',
        'icon'     : 'wb_sunny',
        'url'      : '/award'
    },
    {
        'id'       : 'depositwithdral',
        'title'    : 'แจ้งฝาก-ถอน',
        'translate': 'NAV.DEPOSIT.TITLE',
        'type'     : 'item',
        'icon'     : 'widgets',
        'url'      : '/deposit'
    },
    {
        'id'       : 'creditreport',
        'title'    : 'รายงานเครดิต',
        'translate': 'NAV.CREDITREPORT.TITLE',
        'type'     : 'item',
        'icon'     : 'monetization_on',
        'url'      : '/creditreport'
    },
    {
        'id'       : 'guidline',
        'title'    : 'ระบบแนะนำ',
        'translate': 'NAV.GUIDLINE.TITLE',
        'type'     : 'item',
        'icon'     : 'explore',
        'url'      : '/guidline'
    },
    {
        'id'       : 'createsetnumber',
        'title'    : 'สร้างเลขชุด',
        'translate': 'NAV.SETNUMBER.TITLE',
        'type'     : 'item',
        'icon'     : 'bubble_chart',
        'url'      : '/createsetnumber'
    },
];
