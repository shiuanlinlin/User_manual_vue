<template>
    <div class="A4_Content_p2 position-relative">
        <div class="pdf_txt2_Content">
            <h2>目錄</h2>
            <div class="Pdf_Page_List d-flex">
                <!-- 將畫面分成兩格或一格 page_1 、 page_2-->
                <div class="page_2 Edit" :data-id="id" data-bs-toggle="modal" data-bs-target="#txtModal">
                    <!-- 一排16個就滿頁 -->
                    <ul class="PageUl" v-for="(item,index) in prop2" :key="index">
                        <li v-if="item.status == 1">
                            <div class="number_t">({{ changeNumber(item.stort) }})</div>
                            <div class="title">{{ item.name }}</div>
                            <div class="point"></div>
                            <div class="pagenumber" v-if="(Number( item.page ) < 10 )">{{ item.page }}</div>
                            <div class="pagenumber spacing" v-if="(Number( item.page ) > 9 )">{{ item.page }}</div>
                        </li>
                        <li v-if="item.status == 2" class="status_2">
                            <div class="number_t"></div>
                            <div class="title">{{ item.name }}</div>
                            <div class="point"></div>
                            <div class="pagenumber">{{ item.page }}</div>
                        </li>
                        <li v-if="item.status == 3" class="ml-34x">
                            <div class="number_t">({{ item.num  }}.)</div>
                            <div class="title">{{ item.name }}</div>
                            <div class="point"></div>
                            <div class="pagenumber">{{ item.page }}</div>
                        </li>
                        <li v-if="item.status == 4" class="ml-64x">
                            <div class="number_t"></div>
                            <div class="title">{{ item.name }}</div>
                            <div class="point"></div>
                            <div class="pagenumber">{{ item.page }}</div>
                        </li>
                        <li v-if="item.status == 5">
                            <div class="number_t">({{ changeNumber(item.stort) }})</div>
                            <div class="title">{{ item.name }}</div>
                        </li>
                        <div ref="PdfHTMLList"></div>
                    </ul>
                </div>
                <div class="page_2" :data-id="id+'_edit'" data-bs-toggle="modal" data-bs-target="#txtModal">
                  <div ref="PdfHTML">
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import penicon from '../../components/icon/pen.vue';
export default {
    props: {
        prop1: {
            type: String,
            required: true,
        },
        prop2: Object
    },
    components: {
        penicon,
    },
    data() {
        return {
            id: "pdf_p2"
        }
    },
    mounted() {
        this.$refs.PdfHTML.innerHTML = this.prop1;
    },
    methods: {
        //切換中文的數字
        changeNumber(index)
        {
            let zh = ["ㄧ","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十"];
            return zh[index - 1]
        }
    }
}
</script>