<template>
  <div>
    <Breadcrumb :exampleProp="crumb" />
    <h3>{{ crumb }}</h3>
    <p>說明 : 展示 PDF繪製成果</p>
    <button class="mb-3 py-1" @click="generatePDF">匯出 PDF</button>
    <div class="row g-3 mb-3">
      <div class="col-auto d-none">
        <input type="text" class="form-control" id="getwebUrl" placeholder="請貼上網址">
      </div>
      <div class="col-auto">
        <button class="btn btn-primar me-2" @click="getwebcatalog">匯入目錄json</button>
        <button class="btn btn-primar" @click="getweb">匯入頁面json</button>
      </div>
    </div>
    <div class="A4_box">
      <div class="A4_Content" ref="pdfContent">
          <A4_Content_p1 :prop1=EditClass :prop2=pdftitle1 />
          <A4_Content_p2 :prop1=pdftitle2 :prop2=p2List />
          <A4_Content_p3 v-for="item in p3ul" :key="item.id" :data="item"/>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="txtModal" tabindex="-1" aria-labelledby="txtModalLabel" aria-hidden="true" ref="Modalshow">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="txtModalLabel">文字修改</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input type="hidden" class="form-control" v-model="modalInputId">
            <input type="text" class="form-control" v-if="firstTitle == true" v-model="modalInputValue">
            <div v-if="QuillShow == true">
              <QuillEditor theme="snow" v-model="content" />
            </div>
            <!-- 頁數用編輯內容 -->
            <div class="PageNumber" v-if="twopagenumber == true">
              <div class="row">
                <div class="col-8">
                  <select class="form-select mb-3" v-model="selected">
                    <option value="0">請選擇</option>
                    <option value="1">頁數含(一) - (ex:(ㄧ)後台首頁...)</option>
                    <option value="2">頁數- (ex:後台首頁...)</option>
                    <option value="3">大分類(ex:(1.)後台首頁)</option>
                    <option value="4">小分類(ex:後台首頁...)</option>
                  </select>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-secondary" @click="pdf_2_Modal_add">新增</button>
                </div>
              </div>
              <p class="mb-2 text-dark">頁數列表 <span class="text-secondary fs-14x">( 一排最多16個 )</span> </p>
              <div class="border-top mb-3"></div>
              <div id="PagenumberModal">
                <div class="row mb-2">
                  <div class="col-6">
                    <input type="hidden" name="sort" class="form-control" value="1">
                    <input type="hidden" name="num" class="form-control" value="">
                    <!-- data-status="1" 類型 -->
                    <input type="text" name="title" class="form-control border" value="後台首頁" data-status="1">
                  </div>
                  <div class="col d-flex">
                    <button type="button" class="btn btn-light mx-2 border d-none">up</button>
                    <button type="button" class="btn btn-light me-2 border d-none">down</button>
                    <button type="button" class="btn btn-light border" data-action="pdf2_del">移除</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="closeModal" data-bs-dismiss="modal">關閉</button>
            <button type="button" class="btn btn-primary" @click="saveModalInputValue">修改</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal End -->
  </div>
</template>
<script>
import penicon from '../components/icon/pen.vue';
import A4_Content_p1 from '../components/pdf_componets/pdf_p1.vue';
import A4_Content_p2 from '../components/pdf_componets/pdf_p2.vue';
import A4_Content_p3 from '../components/pdf_componets/pdf_p3.vue';
import html2pdf from 'html2pdf.js';
import Breadcrumb from '../components/templates/breadcrumb.vue'
import axios from 'axios';
// 比較簡易的編輯器
// https://vueup.github.io/vue-quill/guide/usage.html
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
//取得Pdf資料
import PdfAll from '../store/Pdf.json';
import PdfTitle from '../store/Pdf_title.json';
import { faL } from '@fortawesome/free-solid-svg-icons';
  export default {
    name: 'Canvas',
    components: {
      Breadcrumb,
      html2pdf,
      penicon,
      A4_Content_p1,
      A4_Content_p2,
      A4_Content_p3,
      QuillEditor
    },
    data() {
      return {
        SelsctArray: [],
        crumb : "Html轉PDF",
        //標題1
        pdftitle1: "預設",
        //Modal文字框
        modalInputValue: "",
        //Ｍodal取得的ID
        modalInputId: "",
        //頁面藍色編輯框
        EditClass: "active",
        //首頁的公司名稱是否顯示 Pdf1
        firstTitle: true,
        //頁面欄位是否顯示 Pdf2
        twopagenumber: false,
        //是否在Modal顯示編輯器
        QuillShow: false,
        //是否顯示Modal輸入框
        ModalInputShow: "",
        //頁數頁面的注意事項提示
        pdftitle2: `
        <p class="red">【注意事項】</p>
        <ol>
            <li>
                因為有幫您做防止XSS(Cross-Site Scripting)跨站腳
                本攻擊，所以在編輯時，瀏覽器若同時開啟兩個不同
                功能但皆有表單的網頁，則先開啟的網頁送出編輯內
                容就會失效
            </li>
            <li>
                建議編輯時，只開一個後台網頁，不要同時開啟兩個後台視窗頁面編輯。
            </li>
        </ol>
        `,
        //編輯器內容
        content: "",
        contentType: "html",
        //頁數頁面的Modal的Select選項
        selected: 0,
        //頁數頁面List
        p2List: [{"name":"後台首頁","status":"1","stort":"1","page":1}],
        //第三頁之後的每個標題
        // P3Title: [
        //   {
        //     "title1":"測試1",
        //     "content1":"<p class='red'>【注意事項】</p>",
        //     "img1":"",
        //     "title2":"測試2",
        //     "content2":"<p class='red'>【注意事項】</p>",
        //     "img2":""
        //   }
        // ],
        p3ul: null
      }
    },
    mounted() {
        //一開始就加入標題
        this.getStorageTitle();
        //一開始就加入目錄
        this.getwebcatalog('load');
        //一開始就創建資料
        this.getweb('load');
        this.$nextTick(() => {
            const element = this.$refs.pdfContent;
            const options = {
                filename: 'my-first-pdf.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 4 },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
            }
            this.generatePDF = () => {
                this.EditClass = "";
                //輸出
                html2pdf().from(element).set(options).save();
            }
        }),
        //監聽Modal開啟
        this.$refs.Modalshow.addEventListener('show.bs.modal', event => {
          //先判斷目前id是否是pdf_p1，如果是就顯示一般視窗
          const button = event.relatedTarget;
          const recipient = button.getAttribute('data-id');
          this.modalInputId = recipient;
          switch(this.modalInputId)
          {
            case "pdf_p1":
              this.QuillShow = false;
              this.firstTitle = true;
              this.twopagenumber = false;
              break;
            case "pdf_p2":
              this.QuillShow = false;
              this.firstTitle = false;
              this.twopagenumber = true;
              break;
            //編輯器開啟
            case "pdf_p2_edit":
              this.QuillShow = true;
              this.firstTitle = false;
              this.twopagenumber = false;
              break;
          }
        }),
        this.$refs.Modalshow.addEventListener('click', event => {
          let target = event.target;
          let action = ('action' in target.dataset ) ? target.dataset.action : false;
          switch(action)
          {
            //移除第二頁的Modal input
            case "pdf2_del":
              let thisinput = target;
              let parenRow = target.parentElement.parentElement;
              parenRow.remove();
              //移除後重新整理頁面的順序id
              let PageNumber = document.getElementById('PagenumberModal');
              let PageNumberList = PageNumber.querySelectorAll('.row');
              //抓取排序用的input 給予新的排序id
              let i = 1;
              PageNumberList.forEach(item=>{
                if(item.querySelector('input[name="sort"]'))
                {
                  item.querySelector('input[name="sort"]').value = i;
                  i++;
                }
              });
              break;
          }
        })
    },
    methods: {
      //抓出標題
      getStorageTitle()
      {
        //存在 window.sessionStorage (頁面關閉就會清除)
        let Storage = window.sessionStorage;
        let Title = Storage.getItem('page_title');
        if(Title)
        {
          //標題 文字修改
          this.pdftitle1 = Title;
        }
      },
      //暫時使用json印出所有資料
      getweb(status){
        this.p3ul = PdfAll.pdf_p3;
        if(status != 'load')
        {
          alert('完成！');
        }
      },
      getwebcatalog(status)
      {
        this.p2List = PdfTitle.pdf_p2_title;
        if(status != 'load')
        {
          alert('完成！');
        }
      },
      //抓取網址資料 (還沒寫完，差在提取id，存入json)
      // getweb(){
      //   axios.get('http://127.0.0.1:5500/index.html')
      //   .then(response => {
      //     this.p3ul = response.data;
      //     console.log(this.p3ul);
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });
      // },
      //分解取得的資料 (還沒寫完，差在提取id，存入json)
      // getListItems() {
      //   if (!this.p3ul) return [];
      //   //我們使用 DOMParser 創建一個 DOM 文件對象，並將網頁內容解析為 DOM 樹。
      //   const parser = new DOMParser();
      //   const doc = parser.parseFromString(this.p3ul, 'text/html');
      //   // 用您實際的 ul 元素
      //   const ulElement = doc.getElementById('sidebar-menu');
      //   if (!ulElement) return [];

      //   //抓取所有li
      //   const liElements = ulElement.getElementsByTagName('li');
      //   //const items = [];

      //   console.log(liElements);
      // },
      getModalPdf_2(){
        //顯示編輯器，隱藏輸入框
        this.modalInputId = "pdf_p2";
        this.QuillShow = "";
        this.ModalInputShow = "d-none";
      },
      saveModalInputValue() {
        const inputValue = this.modalInputValue; // 獲取 input 的值
        const inputId = this.modalInputId;

        //存在 window.sessionStorage (頁面關閉就會清除)
        let Storage = window.sessionStorage;
        switch(inputId)
        {
          case "pdf_p1":
            //標題 文字修改
            this.pdftitle1 = inputValue;
            //存在 window.sessionStorage (頁面關閉就會清除)
            Storage.setItem('page_title', inputValue);
            break;
          case "pdf_p2":
            //頁碼
            //1.取得所有列表
            let Listbox = document.getElementById('PagenumberModal');
            let ListPage = Listbox.querySelectorAll('input[name="title"]');
            let i = 1;
            let j = 1;
            let Alljson = [];
            //先取得舊的資料是否有
            // if(this.p2List.length > 0)
            // {
            //   i = this.p2List.length+1;
            // }
            //stort 是樣式一： (ㄧ)
            //page  是頁數
            ListPage.forEach(item=>{
              let pagenum = (j < 10) ? "0"+j : j ;
              j++;
              if(item.dataset.status == 1)
              {
                Alljson.push({"name":item.value,"num":item.parentElement.children[1].value,"status":Number(item.dataset.status),"stort":i,"page":pagenum});
                i++;
              }
              if(item.dataset.status != 1)
              {
                Alljson.push({"name":item.value,"num":item.parentElement.children[1].value,"status":Number(item.dataset.status),"stort":"","page":pagenum});
              }
            });
            //console.log(this.p2List);
            console.log(Alljson);
            let json = JSON.stringify(Alljson);
            Storage.setItem('page_num', json);
            this.p2List = Alljson;
          break;
        }
      },
      pdf_2_Modal_add(){
        //取得頁數新增
        if(this.selected == 0)
        {
          alert("未選取樣式！");
          return false;
        }
        //新增頁數列表
        const PagenumberModal = document.getElementById('PagenumberModal');
        //取得目前頁面上的排位id
        let PagenumberList = PagenumberModal.querySelectorAll('.row');
        let length = PagenumberList.length;
        //新增
        let Html = "";
        if(this.selected != 3)
        {
          Html = `
            <div class="col-6">
              <input type="hidden" name="sort" class="form-control" value="${ length + 1 }">
              <input type="hidden" name="num" class="form-control" value="">
              <input type="text" name="title" class="form-control border" value="" data-status="${ this.selected }">
            </div>
            <div class="col d-flex">
              <button type="button" class="btn btn-light mx-2 border d-none">up</button>
              <button type="button" class="btn btn-light me-2 border d-none">down</button>
              <button type="button" class="btn btn-light border" data-action="pdf2_del">移除</button>
            </div>
        `;
        }

        if(this.selected == 3)
        {
          Html = `
            <div class="col-6 d-flex">
              <input type="hidden" name="sort" class="form-control" value="${ length + 1 }">
              <input type="text" name="num" class="form-control" value="">
              <input type="text" name="title" class="form-control border" value="" data-status="${ this.selected }">
            </div>
            <div class="col d-flex">
              <button type="button" class="btn btn-light mx-2 border">up</button>
              <button type="button" class="btn btn-light me-2 border">down</button>
              <button type="button" class="btn btn-light border" data-action="pdf2_del">移除</button>
            </div>
        `;
        }

        let rowTag = document.createElement('div');
        rowTag.classList.add('row');
        rowTag.classList.add('mb-2');
        rowTag.innerHTML = Html;
        PagenumberModal.append(rowTag);
      }
    },
  }
</script>
