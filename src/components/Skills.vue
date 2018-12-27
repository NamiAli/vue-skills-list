<template>
	<div class='container'>
		<div class="holder">
			<form @submit.prevent="addSkill" >
				<input type="text" placeholder='enter a skill' v-model='skill'  v-validate="'min:3'" name='skill'>
				<transition name='alert-in' enter-active-class='animated flipInX' leave-active-class='animated flipOutX'>
					<p class='alert' v-if="errors.has('skill')">{{errors.first('skill')}}</p>
				</transition>
			</form>
			<ul>
				
					<li v-for="(data, index) in skills" :key='index'>{{index}}.{{data.skill}}
						<button  @click='remove(index)'>x</button>
					</li>
				
		</ul>

		<p>These are the skills that you posses..</p>
		</div>
	</div>
</template>


<script>
	
	export default {

		 data(){
		 	return {
		 		skills: [
		 		{skill: 'HTML'},
		 		{skill: 'Css'}
		 		],

		 		skill: ''
		 		
		 	}
		 },

		 methods:{

		 	addSkill(){
		 		this.$validator.validateAll().then((result)=>{
		 			if(result){

		 		this.skills.push({skill: this.skill})
		 		this.skill = ''
		 			} else 
		 			console.log("Not Validate")
		 		});

		 	},

		 	remove(id){
		 		this.skills.splice(id, 1)
		 	}
		 }
	}
</script>

<style scoped>

@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';
@import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'

.holder {
	background: #fff;
}
    ul {
    	margin: 0;
    	padding: 0;
    	list-style: none;
    }
	ul li {
		padding: 20px;
		font-size: 1.3em;
		background: #e0edf6;
		margin-bottom: 2px;
		color:#3e5252;
	}

	p {
		text-align:center;
		padding: 30px 0;
		color: gray;

	}

	.container{
		box-shadow: 0px 0px 40px lightgray;

	}

	input {
		width:calc(100% - 40px);
		border:0;
		padding:20px;
		font-size: 1.3em;
		background: #323333;
		color:#687f7f;
	}

     .alert{
     	background: #fdf2ce;
     	font-weight: bold;
     	display:inline-block;
     	padding:5px;
     	margin-top:-20px;
     }

     .alert-in-enter-active {
     	animation: bounce-in .5s;

     }

     .alert-in-leave-active {
     	animation: bounce-in .5s reverse;
     }

	  @keyframes bounce-in {
	  	0% {
	  		transform: scale(0);
	  	}
	  	50% {
	  		transform: scale(1.5);
	  	}
	  	100%{
	  		transform: scale(1);
	  	}
	  }

	  button {
	  	float:right;
	  	cursor:pointer;
	  	background:transparent;
	  	border:none;
	  }

</style>