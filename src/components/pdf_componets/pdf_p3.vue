<template>
    <div class="A4_Content_p2 position-relative">
        <div class="pdf_txt2_Content">
            <!-- pagestatus == 1 表示只有一欄 ， 2 等於兩欄 -->
            <h2 class="d-flex" v-if="data.pagestatus == 1">
                <div class="page3_title w-50" data-id="page3_title_1">{{ data.title1 }}</div>
            </h2>
            <h2 class="d-flex" v-if="data.pagestatus == 2">
                <div class="page3_title w-50" data-id="page3_title_1">{{ data.title1 }}</div>
                <div class="page3_title w-50" data-id="page3_title_2">{{ data.title2 }}</div>
            </h2>
            <div class="Pdf_Page_List d-flex">
                <!-- 將畫面分成兩格或一格 page_1 、 page_2-->
                <div class="page_3 Edit">
                    <div v-html="data.content1"></div>
                    <div v-html="data.img1"></div>
                </div>
                <div class="page_3 Edit2">
                    <div v-html="data.content2"></div>
                    <div v-html="data.img2"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import penicon from '../../components/icon/pen.vue';
export default {
    props: {
        data: {
            type: Object,
            required: true,
        }
    },
    //過濾器，安全顯示HTML
    components: {
        penicon,
    },
    data() {
        return {
            id: "pdf_p3"
        }
    }
}
</script>