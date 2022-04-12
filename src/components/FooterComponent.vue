<template>
	<v-footer height="auto" color="#5D6162">
		<v-container fluid class="px-8 py-2">
			<v-row no-gutters justify="space-between">
				<v-col cols="12">
					
					<v-sheet class="transparent" dark>
						<p class="text-center text-h6 font-weight-light">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis incidunt ipsum nemo sapiente eum dolorum quibusdam ad blanditiis iure. Hic exercitationem quod ipsa ex ad necessitatibus voluptates veritatis voluptatem!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a obcaecati voluptatem quaerat expedita iure harum, quidem ullam dignissimos commodi facilis temporibus omnis. Voluptates, repudiandae laborum quia fugit possimus natus?
            </p>
					</v-sheet>
				</v-col>
			</v-row>
			<v-row no-gutters justify="center" class="mt-2">
					<v-btn class="mx-4" outlined fab color="white">
						<v-icon large>mdi-facebook</v-icon>
					</v-btn>
					<v-btn class="mx-4" outlined fab color="white">
						<v-icon large>mdi-twitter</v-icon>
					</v-btn>
					<v-btn class="mx-4" outlined fab color="white">
						<v-icon large>mdi-instagram</v-icon>
					</v-btn>
					<v-btn class="mx-4" outlined fab color="white">
						<v-icon large>mdi-youtube</v-icon>
					</v-btn>
			</v-row>
		</v-container>
	</v-footer>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class FooterComponent extends Vue {
	
}
</script>