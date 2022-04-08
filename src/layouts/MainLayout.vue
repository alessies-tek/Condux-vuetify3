<template>
  <div>
    <!-- Top bar -->
    <v-app-bar
      class="bg-color1"
      density="compact"
    >
      <template v-slot:append>
        <v-text-field
          density="compact"
          variant="outlined"
          label="Search"
          hide-details
          prepend-inner-icon="mdi-magnify"
          class="pr-3 mt-4"
          size="15"
        ></v-text-field>
        <v-switch
          v-model="darkMode"
          label="Dark Mode"
          hide-details
          flat
          class="font-weight-boldm mt-2"
        ></v-switch>
        <!-- Notification -->
        <v-btn 
          class="text-none mx-2" 
          stacked
          @click="showNotification"
        >
          <v-badge 
            :content="messages"
            color="primary"
          >
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
        <v-menu
          v-model="showMenu"
          absolute
          offset-y
          :position-x="menuPosition.x"
          :position-y="menuPosition.y">
          <v-list
            dense
            class="py-0"
            style="max-width: 400px">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :class="'border-bottom-color5 cursor-pointer hover4' + (!item.view? ' bg-color2-lighten':'')"
              >
                <!-- <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon> -->
                <v-list-item-content class="text-no-wrap">
                  <v-row>
                    <v-col class="pb-0">
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-col>
                    <v-col class="pb-0 text-right">
                      <v-list-item-action-text v-text="item.date"></v-list-item-action-text>
                    </v-col>
                  </v-row>
                  <v-list-item-subtitle v-text="item.subtext"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
          </v-list>
        </v-menu> 
        <v-btn icon="mdi-dots-vertical" class="mt-2"></v-btn>
      </template>
      

    </v-app-bar>
    <!-- left bar -->
    <v-navigation-drawer
      rail
      expand-on-hover
      class="mt-0 left-bar"
      permanent
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar size="large">
            <v-img src="@/assets/img/logo.svg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title class="text-h6 ml-3">
            Condux
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>


      <v-list>
        <v-list-item 
          link to="/profile"
          :prepend-avatar="require('@/assets/img/researchers/test.jpg')"
          title="Alessio Pampana"
          subtitle="pampana.alessio@gmail.com"
          class="color6 left-profile"
        >

        </v-list-item>
        <v-list-item @click="logout" link>
          <v-list-item-avatar start style="padding-inline-start:0!important">
            <v-icon icon="mdi-logout-variant"></v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="color2">Logout</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <!-- Routes -->
      <v-list
        nav
        dense        
        class="left-link" 
      >
        <v-list-item link to="/">
          <v-list-item-avatar start style="padding-inline-start:0!important">
            <v-icon icon="mdi-home"></v-icon>
          </v-list-item-avatar>            
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/projects">
          <v-list-item-avatar start style="padding-inline-start:0!important">
            <v-icon icon="mdi-note-multiple"></v-icon>
          </v-list-item-avatar> 
          <v-list-item-title>Projects</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/account" color="primary">
          <v-list-item-avatar start style="padding-inline-start:0!important">
            <v-icon icon="mdi-account"></v-icon>
          </v-list-item-avatar>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/schedules" color="primary">
          <v-list-item-avatar start style="padding-inline-start:0!important">
            <v-icon icon="mdi-folder-clock"></v-icon>
          </v-list-item-avatar>
          <v-list-item-title>Schedules</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <!-- Pages -->
    <v-main class="v-main">
      <div class="pa-5">
        <slot></slot>
      </div>     
    </v-main>
    <!-- Footer -->
    <FooterTemplate/>
  </div>
</template>

<script>
import FooterTemplate from './FooterTemplate';
import router from '../router/index'
export default {
  name: 'MainLayout',
  data: () => ({
    messages: 2,
    showMenu : false,
    darkMode: false,
    menuPosition: {
            x: 0,
            y: 0
          },
          items: [
        {
          icon: 'mdi-phone',
          text: 'New call scheduled',
          subtext: 'you have a new scheduled text',
          date: '1 minute ago',
          view: false
        },
        {
          icon: 'mdi-email-open',
          text: 'New Message',
          subtext: 'You have a new message from research1',
          date: '1 minute ago',
          view: false
        },
        {
          icon: 'mdi-email-open',
          text: 'New Message',
          subtext: 'You have a new message from research2',
          date: '10:59',
          view: true
        },
      ],
  }),
  methods:
  {
    showNotification(e) 
    {
      this.showMenu = true;
      this.messages = 0;
      this.menuPosition.x = e.clientX;
      if (e.clientY < 55) {
        this.menuPosition.y = 55;
      } else {
        this.menuPosition.y = e.clientY;
      }
    }
    ,
    logout()
    {
      localStorage.removeItem('user');
      router.push("/login")
    }
  },
  components: {
    FooterTemplate
  },
  watch: {
    darkMode(newValue){
      this.$emit('darkMode', newValue)
      //alert(this.darkMode)
      var a = this.$vuetify.theme
      //console.log(a)
      //this.$vuetify.theme.setTheme('dark')
      //this.$vuetify.theme.dark = Value
      //this.$vuetify.theme.themes.name = 'v-theme--dark'
      /* eslint-disable */
      debugger
      console.log(a)
      //this.$vuetify.theme.themes.dark = !this.$vuetify.theme.themes.dark;
    }
  },
  emits: ['darkMode']
  
};
</script>
