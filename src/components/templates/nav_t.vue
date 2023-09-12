<template>
  <div>
    <ul class="list-group list-group-flush">
        <li v-for="(item , index) in MenuBar" :key="index">
            <a v-if="item.list == null " :href="item.link" class="list-group-item">
                {{ item.name }}
            </a>
            <div v-else class="list-group-item">
                {{ item.name }}
            </div>
            <ul>
                <li v-for="(items , itindex) in item.list" :key="itindex">
                    <router-link class="list-group-item"
                        :to="{
                            name: items.link,
                            params: { id: items.urlid }
                        }">
                        {{ items.name }}
                    </router-link>
                </li>
            </ul>
        </li>
    </ul>
  </div>
</template>
<script>
    export default {
        data: function() {
            return {
                MenuBar: [
                    {
                        name: '網頁作品',
                        link: '/'
                    },
                    {
                        name: '功能串接',
                        link: 'Ghart',
                        list: [
                            {name: 'HTML轉Pdf' , link: 'Pdf', urlid: 1},
                        ]
                    }
                ]
            }
        }
    }
</script>