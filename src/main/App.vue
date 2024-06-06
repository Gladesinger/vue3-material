<template>
  
	<div>

		<md-card md-with-hover>
			<md-ripple>
				<md-card-header>
				<div class="md-title">Card with hover effect</div>
				<div class="md-subhead">It also have a ripple</div>
				</md-card-header>

				<md-card-content>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
				</md-card-content>

				<md-card-actions>
				<md-button>Action</md-button>
				<md-button>Action</md-button>
				</md-card-actions>
			</md-ripple>
		</md-card>

    <md-button class="md-button md-raised md-theme-default md-accent">
			this is a button
		</md-button>

		<md-datepicker  :md-immediately="true" >
      <label>Datepicker</label>	
    </md-datepicker>	

		<md-checkbox >
			<md-tooltip md-delay="300" md-direction="bottom" >this is a tooltip</md-tooltip>
			this is a checkbox
		</md-checkbox>

		<md-tabs @md-changed="changeTab">
        <md-tab id="tab-home" md-label="Home">
          Home Tab
          <p>Unde provident nemo</p>
        </md-tab>

        <md-tab id="tab-pages" md-label="Pages">
          Pages tab
          <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
        </md-tab>

        <md-tab id="tab-posts" md-label="Posts">
          Posts tab
          <p>Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex tempora animi, illum tenetur quae assumenda iusto.</p>
        </md-tab>

        <md-tab id="tab-favorites" md-label="Favorites">
          Favorites tab
          <p>Maiores, dolorum. Beatae, optio tempore fuga odit aperiam velit, consequuntur magni inventore sapiente alias sequi odio qui harum dolorem sunt quasi corporis.</p>
        </md-tab>
      </md-tabs>
		
  </div>
  
</template>

<script>
	// import '@/css/vue-material.min.css';
	import '@/css/default.css';
	import '@/main/css/main.css';
	
	// import MdButton from "@/components/MdButton/MdButton.vue"
	// import MdDatepicker from "@/components/MdDatepicker/MdDatepicker.vue"
	// import MdTooltip from "@/components/MdTooltip/MdTooltip.vue"

	// import MdCheckbox from "@/components/MdCheckbox/MdCheckbox.vue"
	// import MdTabs from "@/components/MdTabs/MdTabs.vue"
	// import MdTab from "@/components/MdTabs/MdTab.vue"

	export default {
		
		// components: {
		// 	MdButton,
		// 	MdDatepicker,
		// 	MdTooltip,
		// 	MdCheckbox,
		// 	MdTabs,
    	// 	MdTab,
		// },
		
		name: 'app'

		
	}



</script>