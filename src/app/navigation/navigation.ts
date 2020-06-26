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
        //'translate': 'NAV.COUNTDOWN',
        'type'     : 'item',
        'icon'     : 'home',
        'url'      : '/components/countdown'
    },
    {
        'id'       : 'lottery',
        'title'    : 'แทงหวย',
        //'translate': 'NAV.COUNTDOWN',
        'type'     : 'item',
        'icon'     : 'games',
        'url'      : '/components/countdown'
    },
    {
        'id'       : 'orders',
        'title'    : 'รายการโพย',
        //'translate': 'NAV.COUNTDOWN',
        'type'     : 'item',
        'icon'     : 'format_list_bulleted',
        'url'      : '/components/countdown'
    },
    {
        'id'       : 'award',
        'title'    : 'ดูผลรางวัล',
        //'translate': 'NAV.COUNTDOWN',
        'type'     : 'item',
        'icon'     : 'wb_sunny',
        'url'      : '/components/countdown'
    },
    {
        'id'       : 'depositwithdral',
        'title'    : 'แจ้งฝาก-ถอน',
        //'translate': 'NAV.COUNTDOWN',
        'type'     : 'item',
        'icon'     : 'widgets',
        'url'      : '/components/countdown'
    },
    {
        'id'       : 'creditreport',
        'title'    : 'รายงานเครดิต',
        //'translate': 'NAV.COUNTDOWN',
        'type'     : 'item',
        'icon'     : 'monetization_on',
        'url'      : '/components/countdown'
    },
    {
        'id'       : 'guidline',
        'title'    : 'ระบบแนะนำ',
        //'translate': 'NAV.COUNTDOWN',
        'type'     : 'item',
        'icon'     : 'explore',
        'url'      : '/components/countdown'
    },
    {
        'id'       : 'createsetnumber',
        'title'    : 'สร้างเลขชุด',
        //'translate': 'NAV.COUNTDOWN',
        'type'     : 'item',
        'icon'     : 'bubble_chart',
        'url'      : '/components/countdown'
    },
];
