<template>
  <div>
  </div>
</template>
<script>
  import Breadcrumb from '../components/templates/breadcrumb.vue'
  export default {
    components: {
      Breadcrumb
    },
    // https://jsonplaceholder.typicode.com/
    data() {
      return {
        crumb : "輸出pdf",
        newsLimted: {
          crumbTitle: "測試",
          newsData: [],
        }
      }
    },
    mounted() {
      this.axios
        .get("https://sheets.googleapis.com/v4/spreadsheets/1YpaqQBSqP8Uj5kfbMj6guJRWXMhHzF8xfvPcWeNu5KI/values/test?alt=json&key=AIzaSyBgXXJ4Tv6GYXQG7QtFMAt5rnVewqqoyjE")
        .then(response => {
          let DataJson = [];
          if(response.data.values)
          {
            let responseData = response.data.values;
            console.log(responseData);
            responseData.forEach(item =>{
              DataJson.push({"name":item[0] , "link": item[1], "imgurl": item[2], "status": item[3]});
            });
            this.newsLimted.newsData = DataJson;
            console.log(DataJson);
            console.log(this.newsData);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
</script>





