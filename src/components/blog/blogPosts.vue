<template>
    <div class="post-box">
        <span class="post-views">{{ views }}</span>
        <h3 class="post-title">{{ title | reversing }}</h3>
        <span class="post-date">{{ date }}</span>
        <p class="post-content">{{ content | short(25,' read more...') | upercase | reversing }}</p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-aouther">{{ aouther }}</span>
            </div>
            <div class="col-sm-6 text-end">
                <span class="post-category">{{ category | upercase }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["views","title","date","content","aouther","category"],    
    name: "post"
}
</script>

<style lang="scss" scoped>
.post-box {
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10 #ddd;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
    .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 6px;
    color: white;
    background-color: #30a3ff;
    text-align: center;
    font-weight: bold;
    padding: 1px 3px;;
    }
    .post-date {
    font-size: 14px;
    color: #888;
    padding-bottom: 5px;
    display: block;
    }
    .post-content {
        line-height: 1.9;
        color: #777;
    }
    .post-aouther {
    background-color: #795548;
    color: white;
    border-radius: 3px;
    padding: 5px 10px;
    }
    .post-category {
    background-color: #a82a7e;
    color: white;
    border-radius: 3px;
    padding: 5px 10px;        
    }
}
</style>