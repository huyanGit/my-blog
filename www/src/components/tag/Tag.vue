<template>
  <div class="tag">
    <div class="tag_num">共有{{tags.length}}个标签：</div>
    <ul>
    	<li :style="{fontSize: tag.count*2 + 15 + 'px'}" v-for="tag in tags"><router-link :to="'/tag/' + tag.code">{{tag.tag_name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    tags: state => state.tag.tags
  }),
  created(){
  	this.$store.dispatch('getTags')
  }
}
</script>

<style scoped>
.tag_num {
	font-size: 18px;
	color: #555;
}
li{
	display: inline-block;
	margin-right: 20px;
	list-style: none;
	margin-bottom: 5px;
}
.tag ul{
	padding:50px;
}
</style>
