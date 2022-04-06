<template>
  <v-card>
    <v-card-title>
      Schedule
    </v-card-title>
    <div>
      <v-stepper
        v-model="step"
        vertical
      >
        <v-stepper-step
          :complete="step > 1"
          step="1"
        >
          General
          <small>Summarize if needed</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card
            class="mb-12 border-none"
          >
            <v-flex xs11 sm6 md4 lg3>
              <v-text-field
                label="Name"
              ></v-text-field>
              <v-textarea
                name="input-7-1"
                label="Description"
                hint="Hint text"
              ></v-textarea>
            </v-flex>
          </v-card>
          <v-btn
            color="primary"
            @click="step = 2"
          >
            Continue
          </v-btn>
          <v-btn 
          text
          color="secondary"
          >
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-step
          :complete="step > 2"
          step="2"
        >
          Configure analytics for this app
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card
            color="grey lighten-1"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="step = 3"
          >
            Continue
          </v-btn>
          <v-btn 
          text
          color="secondary"
          >
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-step
          :complete="step > 3"
          step="3"
        >
          Select an ad format and name ad unit
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card
            color="grey lighten-1"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="step = 4"
          >
            Continue
          </v-btn>
          <v-btn 
          text
          color="secondary"
          >
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-step step="4">
          View setup instructions
        </v-stepper-step>
        <v-stepper-content step="4">
          <v-card
            color="grey lighten-1"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="step = 1"
          >
            Save
          </v-btn>
          <v-btn 
          text
          color="secondary"
          >
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: 'ScheduleComponent',

    data: () => ({
      step:1
    }),
  }
</script>
