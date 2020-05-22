<template>
<div class="container">
    <header>
        <div class="nav-header">
            <a class="navbar-brand logo" href="a.html">海外求⼈サイト</a>
            <p class="sub-brand">世界最⼤級の⽇本⼈向け海外求⼈サイト</p>
        </div>       
        <div class="attr-nav">
            <a class="login">求職者会員ログイン</a>
            <a class="member">企業会員ログイン</a>
        </div>
    </header>
    <nav v-bind:class="active" @click.prevent>
        <a href="#" class="home" @click="makeActive('home')">Home</a>
        <a href="#" class="projects" @click="makeActive('projects')">Projects</a>
        <a href="#" class="services" @click="makeActive('services')">Services</a>
        <a href="#" class="contact" @click="makeActive('contact')">Contact</a>
  </nav>
  <section class="inner-banner">
        <div class="overlay">
            <div class="container advanced-search">
                <div class="row">
                    <div class="col-sm-6 searchform-one">
                        <h5 class="m-b-10">求⼈検索</h5>
                        <div class="searchdiv">
                            <table>
                                <tr>
                                    <th>
                                        <ul class="search-ul">
                                            <li>
                                                <span id="myBtn">エリアを選択<span class="drop-icon"></span></span>
                                            </li>
                                            <li>
                                                <span id="show-modal" @click="showModal = true">職種を選択<span class="drop-icon"></span></span>
                                            </li>
                                            <li>
                                                <input id="show-modal" placeholder="キーワードで絞り込む"> <span class="icon-delete"></span>
                                            </li>
                                        </ul>
                                    </th>
                                    <td>
                                        <button class="btn searchbtn">検索</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <!--modal dialog box-->
                        <div id="myModal" class="modal">
                            <!-- Modal content -->
                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <p>Some text in the Modal..</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-sm-6 searchform-two">
                        <h5 class="m-b-10">スカウト待ち⼈材検索</h5>
                        <div class="searchdiv">
                            <ul>
                                <li><span id="show-modal" @click="showModal = true">エリアを選択<span class="drop-icon"></span></span>
                                </li>
                                <li><span id="show-modal" @click="showModal = true">職種を選択<span class="drop-icon"></span></span>
                                </li>
                                <li><span id="show-modal">キーワードで絞り込む</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<style lang="scss">
@import './resources/sass/app.scss'; // Using this should get you the variables
   
nav{
	display:inline-block;
	margin:20px auto 30px;
	background-color:color(primary);
	box-shadow:0 1px 1px #ccc;
    border-radius:$borderradius2;
    width: 100%;

    a{
        display:inline-block;
        padding: 15px 30px;
        color:#fff !important;
        font-weight:bold;
        font-size:16px;
        text-decoration:none !important;
        line-height:1;
        text-transform: uppercase;
        background-color:transparent;
        transition:background-color 0.25s;

        &:first-child{
            border-radius:2px 0 0 2px;
        }
        &:last-child{
            border-radius:0 2px 2px 0;
        }
    }  
}
    nav.home .home,
    nav.projects .projects,
    nav.services .services,
    nav.contact .contact{
        background-color:color(second);
    }
</style>
<script>
export default {
    data: function() {
        return {
            active: 'home'
        };
    },
    methods:{
        makeActive:function(item){
            this.active = item;
        }
    }
}
</script>
