
    $(function () {

        $("#range").ionRangeSlider({

            hide_min_max: true,
            keyboard: true,
            min: 0,
            max: 300000,
            from: 35000,
            to: 4000,
            type: 'single',
            step: 1,
            postfix: " рублей",
            grid: true,
            grid_num: 1,
            force_edges: 'boolean'
        });

    });