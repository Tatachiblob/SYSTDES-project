$(function() {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    Morris.Area({
        element: 'morris-monthlySales',
        data:[
            {
                month: '2016-01',
                ths: 2666,
                last: 2647
            }, {
                month: '2016-02',
                ths: 2778,
                last: 2441
            }, {
                month: '2016-03',
                ths: 4912,
                last: 2501
            }, {
                month: '2016-04',
                ths: 3767,
                last: 2589
            }, {
                month: '2016-05',
                ths: 6810,
                last: 6000
            }, {
                month: '2016-06',
                ths: 5670,
                last: 4293
            }, {
                month: '2016-07',
                ths: 4720,
                last: 3795
            }, {
                month: '2016-08',
                ths: 5967,
                last: 5000
            }, {
                month: '2016-09',
                ths: 8902,
                last: 7999
            }, {
                month: '2016-10',
                ths: 8240,
                last: 9200
            }, {
                month: '2016-11',
                ths: 10032,
                last: 9991
            }, {
                month: '2016-12',
                ths: 12318,
                last: 11892
            }
        ],
        xkey: 'month',
        ykeys: ['ths', 'last'],
        labels: ['2016', '2015'],
        hideHover: 'auto',
        resize: true,
        xLabelFormat: function (x) {
            var month = months[x.getMonth()];
            return month;
        },
        dateFormat: function (x) {
            var month = months[new Date(x).getMonth()];
            return month;
        }
    });
    
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2010 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2011 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2011 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
