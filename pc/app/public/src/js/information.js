(function () {
    var appInformation = new Vue({
        el: ".main",
        data: function() {
            return {
                selectedMenu: {
                    name: "优达学城",
                    isSelected: true,
                    id: 1
                },
                infoMenu: [
                    {
                        name: "优达学城",
                        isSelected: true,
                        id: 1
                    }, {
                        name: "量子位",
                        isSelected: false,
                        id: 2
                    }, {
                        name: "景略集智",
                        isSelected: false,
                        id: 3
                    }, {
                        name: "清华大学数据科学研究院",
                        isSelected: false,
                        id: 4
                    }
                ]
            }
        },
        mounted: function () {
            
        },
        methods: {
            selectMenu: function(menu) {
                this.clearSelect();
                this.selectedMenu = menu;
                menu.isSelected = true;
            },
            clearSelect: function() {
                this.infoMenu.forEach(function() {
                    element.isSelected = false;
                });
            }
        }
    })
})();