<template>
  
	<div>

		<!-- <md-card md-with-hover>
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
		</md-button> -->

		<!-- <md-datepicker v-model="valuePicker" :md-disabled-dates="disabledDates" @md-closed="closedPicker" @md-opened="openedPicker" :md-immediately="true" ref="MdDatepicker">
			<label>Datepicker</label>	
		</md-datepicker>

		{{ valuePicker }} -->

		<!-- <md-checkbox >
			<md-tooltip md-delay="300" md-direction="bottom" >this is a tooltip</md-tooltip>
			this is a checkbox
		</md-checkbox> -->

		<md-tabs>
			<template v-slot:md-tab="{ tab }">
				<slot>
					<span class="show-span">{{ tab.label }}
						<sup class="badge" v-if="tab.data.badge">{{ tab.data.badge }}</sup>
					</span>
				</slot>
			</template>

			<md-tab id="tab-home" md-label="Home" :md-template-data="{ badge:num }">
				{{ num }}
				Home Tab
				<p>Unde provident nemo</p>
			</md-tab>

			<md-tab id="tab-pages" md-label="Pages">
				Pages tabs
				<p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
				<p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
				<p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
				<p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
				<p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
			</md-tab>

			<md-tab id="tab-posts" md-label="Posts" :key="num">
				Posts tab
				<p>Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex tempora animi, illum tenetur quae assumenda iusto.</p>
			</md-tab>

			<md-tab id="tab-favorites" md-label="Favorites">
				Favorites tab
				<p>Maiores, dolorum. Beatae, optio tempore fuga odit aperiam velit, consequuntur magni inventore sapiente alias sequi odio qui harum dolorem sunt quasi corporis.</p>
			</md-tab>

			<md-tab v-if="num > 0" :md-on-click="test" id="tab-test" md-label="test">
				TEST	
			</md-tab>
		</md-tabs>
		<button @click="change">Change</button>
  </div>
  
</template>

<script>
import { format as formatDateFns } from 'date-fns';
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
		
		name: 'app',
		data() {
			let date = this.getCurrentDate()
			return {
				dataValue: "",
				valuePicker: date,
				// valuePicker: "",
				errorVisible: false,
				focused: false,
				succesBirthday: false,
				num: 0
				// instanceCalendar: null
			}
		},
		mounted(){
			this.$material.locale.dateFormat = 'dd.MM.yyyy'
		},
		methods:{
			test(){
				console.log('test')
			},
			change(){
				//tetss
				this.num++
			},
			disabledDates(datePicker) {
				const day = datePicker.getDate()
				const year = datePicker.getFullYear()
				const month = datePicker.getMonth()
				const currentDate = new Date()
				const currentDay = currentDate.getDate()
				const currentMonth = currentDate.getMonth()
				const currentYear = currentDate.getFullYear()
				return (year == currentYear &&
						((month +1) > (currentMonth + 1) || ( (month +1) == (currentMonth + 1) && day > currentDay )) || year > currentYear)
			},
			openedPicker() {
				if (!this.succesBirthday && this.dataValue !== "") {
					this.dataValue = this.valuePicker
				}
			},
			closedPicker() {
				// this.dataValue = this.valuePicker
			},
			getCurrentDate() {
				let date = new Date()
				// console.log("formatDateFns", formatDateFns(date, 'dd.MM.yyyy'))
				// return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
				return formatDateFns(date, 'dd.MM.yyyy')
			},
		}
	}



</script>