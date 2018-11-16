$(function () {
    var CONST = {
        apiBase: '/api/v1/'
    };
    var utils = {};
    var vueApp = {};
    var initVue = function(words) {
        vueApp = new Vue({
            el: ".container",
            data: function () {
                return {
                    keyword: "",
                    filterWords: [],
                    words: words,
                    filterItems: {
                        word: {
                            isShow: true,
                            name: "显示英文单词"
                        },
                        wordMeaning: {
                            isShow: true,
                            name: "显示单词词义"
                        },
                        aidocs-www: {
                            isShow: true,
                            name: "显示单词例句"
                        },
                        allaidocs-www: {
                            isShow: false,
                            name: "显示所有例句"
                        },
                        serialNumber: {
                            isShow: false,
                            name: "显示单词编号"
                        },
                        wordInput: {
                            isShow: false,
                            name: "显示单词输入框"
                        },
                        aidocs-wwwInput: {
                            isShow: false,
                            name: "显示句子输入框"
                        }
                    },
                    isLoaded: false,
                    isShowWord: true,
                    isShowWordMeaning: true,
                    isShowaidocs-www: true,
                    isShowAllaidocs-www: false,
                    isShowSerialNumber: false,
                    isShowList: false
                }
            },
            mounted: function () {
                this.isShowList = true;
                setTimeout(function() {
                    $(".loading-warp").remove();
                }, 100);
            },
            methods: {
                seleteItem: function (item, key) {
                    if (key === "Allaidocs-www") {
                        if (this.filterItems.allaidocs-www.isShow === false) {
                            this.filterItems.aidocs-www.isShow = false;
                            this.filterItems.word.isShow = true;
                        }
                    }
                    if (key === "isShowaidocs-www") {
                        if (this.filterItems.aidocs-www.isShow === false) {
                            this.filterItems.allaidocs-www.isShow = false;
                        }
                    }
                    this.filterItems[key].isShow = !this.filterItems[key].isShow;
                },

                search: function() {
                    if ( !this.keyword ) {
                        this.showAllWord();
                        return;
                    }
                    this.showThese($("#allWords li:contains("+ this.keyword +")"));
                },

                showThese: function (eles) {
                    var words = [];
                    $.each(eles, function() {
                        var liEle = this;
                        if ( $(this).attr("class") === "aidocs-www-item" ) {
                            liEle = $(this).parent().parent().parent();
                        }
                        words.push($(liEle).attr("data-word"));
                    });
                    
                    function inArray(value, array) {
                        if ( array.length === 0 ) return false;
                        var hasItem = false;
                        array.forEach(function(item) {
                            if ( item === value ) {
                                hasItem = true 
                            }
                        });
                        return hasItem
                    }
                    for (var key in this.words) {
                        var word = this.words[key];
                        if ( inArray(key, words) ) {
                            word.isShow = true;
                        } else {
                            word.isShow = false;
                        }
                    }
                },

                showAllWord: function() {
                    for (var key in this.words) {
                        var word = this.words[key];
                        word.isShow = true;
                    }
                }
            }
        });
    }

    function getItemHtml(options) {
        return '<ul id="'+ options.id +'" v-show="isShowList" style="display: none;">' +
                    '<li class="word-item" v-for="(word, key) in '+ options.listName +'" :key="key" :data-word="key" v-show="word.isShow">' +
                        '<div class="one-word">' +
                            '<span class="serial-number" v-show="filterItems.serialNumber.isShow">' +
                                '{{word.index+1}}' +
                            '</span>' +
                            '<span class="english" v-show="filterItems.word.isShow">' +
                                '{{word.english}}' + 
                                '<input class="englishInput" :class="{\'right\': word.userWordInput === word.english, \'error\': (word.userWordInput && word.userWordInput !== word.english) }" v-model="word.userWordInput" type="text" placeholder="输入单词" v-show="filterItems.wordInput.isShow"/>' + 
                            '</span>' +
                            '<span class="chinese" v-show="filterItems.wordMeaning.isShow">' + 
                                '{{word.chinese}}' + 
                            '</span>' +
                            '<span class="aidocs-www" v-show="filterItems.aidocs-www.isShow">' +
                                '<span class="aidocs-www-english">' +
                                    '{{word.aidocs-www.english}}' + 
                                    '<input class="englishInput" :class="{\'right\': word.useraidocs-wwwInput === word.aidocs-www.english, \'error\': (word.useraidocs-wwwInput && word.useraidocs-wwwInput !== word.aidocs-www.english) }" v-model="word.useraidocs-wwwInput" type="text" placeholder="输入句子" v-show="filterItems.aidocs-wwwInput.isShow"/>' + 
                                '</span>' +
                                '<span class="aidocs-www-chinese">' +
                                    '{{word.aidocs-www.chinese}}' + 
                                '</span>' + 
                            '</span>' +
                        '</div>' +
                        '<div class="example-aidocs-www" v-show="filterItems.allaidocs-www.isShow">' +
                            '<ol>' +
                                '<li class="aidocs-www-item" v-for="(aidocs-www, i) in word.aidocs-wwws" :key="i">' +
                                    '<span class="aidocs-www-english">' +
                                        '{{aidocs-www.english}}' +
                                    '</span>' +
                                    '<span class="aidocs-www-chinese">' +
                                        '{{aidocs-www.chinese}}' +
                                    '</span>' +
                                '</li>' +
                            '</ol>' +
                       '</div>' +
                    '</li>' +
                '</ul>'
    }

    //加载数据
    (function () {
        $.get(CONST.apiBase + "words/" + curNumber, function(res) {
            var html = getItemHtml({
                id: "allWords", 
                listName: "words"
            });
            $("main").html(html);
            for (var key in res.data) {
                var word = res.data[key];
                word.isShow = true;
            }

            setTimeout(function() {
                initVue(res.data);
            }, 100);

        });
    })();

});