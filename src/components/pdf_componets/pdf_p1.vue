<template>
    <div class="A4_Content_p1 position-relative">
        <div class="pdf_txt_Content">
            <div class="title_pdfBox">
                <h2 id="pdftitle_1" class="Edit" :data-id="id" :class="prop1" data-bs-toggle="modal" data-bs-target="#txtModal">{{ prop2 }}後台管理系統</h2>
                <penicon :class="prop1" />
            </div>
            <h3>Quick Start Guide</h3>
            <h4>後台操作說明手冊</h4>
        </div>
        <img class="pdf_logo" src="/img/logo-16.png">
        <img class="pdf_text" src="/img/text-16.png">
        <img class="pdf_bg" src="/img/bg-16.jpg">
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
        prop2: {
            type: String,
            required: true,
        },
    },
    components: {
        penicon,
    },
    data() {
        return {
            id: "pdf_p1"
        }
    },
}
</script>