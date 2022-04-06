<template>
  <div>
    <v-card class="bg-color4 border-none">
      <v-card-title class="bg-color5">
        Projects
        <v-btn
          class="mx-2"
          fab
          dark
          x-small
          color="primary"
          @click="dialog=true"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="projects"
        :loading="loadingTable"
        :hide-default-footer="loadingTable"

        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:[`item.status`]="{ item }">
          <v-chip
            :color="item.color"
            dark
          >
            {{ item.status }}
          </v-chip>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          
          <v-btn
            class="mr-2"
            fab
            depressed
            x-small
            @click="editItem(item)"
            :disabled="loadingTable"
          >
            <v-icon dark>
              mdi-pencil
            </v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            depressed
            x-small
            @click="deleteItem(item)"
            :disabled="loadingTable"
          >
            <v-icon dark>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>
        <template v-slot:no-data>
          <v-btn
            color="primary"
            @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </v-card> 

    <v-dialog
      v-model="dialog"
      max-width="500px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="editedItem.name"
                  label="Name"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-textarea
                  v-model="editedItem.description"
                  label="Description"
                  hint="Hint text"
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
              >
                <v-combobox
                  v-model="editedItem.status"
                  outlined
                  dense
                  label="status"
                  :items="statusItems"
                ></v-combobox>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="secondary"
            text
            @click="close"
            :disabled="loading"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            text
            :loading="loading"
            :disabled="loading"
            @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card>
  </v-card> 

  </div>
</template>

<script>
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      loading: false,
      loadingTable: false,
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Created', value: 'created' },
        { text: 'Modified', value: 'modified' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      projects: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        description: '',
        status: 'draft',
      },
      defaultItem: {
        name: '',
        description: '',
        status: 'draft',
      },
      statusItems:
      [
        'draft',
        'completed',
        'progress',
        'pending'
      ]
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.projects = [
          {
            name: 'Project 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quam quas esse animi eos, error, nemo atque laudantium hic consectetur dolorum exercitationem ipsam ex molestias! Assumenda delectus placeat aliquid nemo!',
            created: '02/12/2021',       
            modified: '3 hours ago',
            status: 'completed',
            color: 'success'
          },
          {
            name: 'Project test',
            description: 'test description',
            created: '03/02/2022',
            modified: '2 hours ago',
            status: 'in progress',
            color: 'warning'
          },
          {
            name: 'Project 2',
            description:'',
            created: '03/04/2022',
            modified: '3 day ago',
            status: 'draft',
            color: 'secondary'
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.projects.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.projects.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      async deleteItemConfirm () {       
        this.closeDelete()
        this.loadingTable = true
        await delay(3000)
        this.projects.splice(this.editedIndex, 1)
        this.loadingTable = false
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      async save () {
        this.loading = true
        await delay(3000)
        if (this.editedIndex > -1) {
          Object.assign(this.projects[this.editedIndex], this.editedItem)
        } else {
          this.projects.push(this.editedItem)
        }
        this.loading = false
        this.close()
      },
    },
  }
</script>