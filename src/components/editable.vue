<template>
	<!--  @focus="isLocked = true"
				 @blur="isLocked = false" -->
		<div 
				@focus="isLocked = true"
				 @blur="isLocked = false"

				 :contenteditable="canEdit"
				 @input="$emit('input', $event.target.innerHTML)"
				 >
		</div>
</template>
<script>
		export default{
				name: 'editDiv',
				props: ['value', 'swValue', 'canEdit'],
				data(){
					return{
						isLocked:false
					}
				},
				    mounted: function () {
				        this.$el.innerHTML = this.value;
				    },
				    watch: {
				        value: function () {
				          if(this.swValue || !this.isLocked){
				            this.$el.innerHTML = this.value; 
				           
				          }
				          
				        }
				      }
		}
</script>
<!-- <style lang="scss" rel="stylesheet/scss">
	.edit-div {
		width: 100%;
		height: 100%;
		overflow: auto;
		word-break: break-all;
		outline: none;
		user-select: text;
		white-space: pre-wrap;
		text-align: left;
		&[contenteditable=true]{
				user-modify: read-write-plaintext-only;
				&:empty:before {
						content: attr(placeholder);
						display: block;
						color: #ccc;
				}
		}
	}
</style> -->