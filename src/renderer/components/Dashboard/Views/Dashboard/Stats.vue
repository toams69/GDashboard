<template>
  <div class="row">
    <div v-for="(item, index) in widgets" :key="index">
      <div class="col-md-6" v-if="item.type==='chart'">
        <chart-card :chart-data="item.data" :chart-options="item.options">
          <div slot="header">
            <h4 class="card-title">{{item.title}}</h4>
            <p class="category">{{item.category}}</p>
          </div>
          <div class="stats" slot="footer-title">
            <i class="ti-check"></i> Data information certified
          </div>
          <div slot="footer">
            <div class="chart-legend">
              <!-- TODO -->
            </div>
          </div>
        </chart-card>
      </div>
      <div class="col-md-6" v-else-if="item.type==='task-list'">
        <!-- TODO -->
        <task-list :data='item.data'></task-list>
      </div>
      <div class="col-md-6" v-else-if="item.type==='time-line'">
        <time-line type="simple">
          <time-line-item class="timeline-inverted" badge-type="danger" badgeIcon="ti-gallery">
            <span slot="header" class="label label-danger">Some title</span>
            <p slot="body">
              Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!!   It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>

            <h6 slot="footer">
              <i class="ti-time"></i>
              11 hours ago via Twitter
            </h6>
          </time-line-item>

          <time-line-item class="timeline-inverted" badge-type="success" badgeIcon="ti-credit-card">
            <span slot="header" class="label label-info">Another Title</span>
            <p slot="body">
              Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....</p>
          </time-line-item>

          <time-line-item class="timeline-inverted" badge-type="info" badgeIcon="ti-check-box">
            <span slot="header" class="label label-success">Another Title</span>
            <div slot="body">
              <p>
                Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM</p>
              <p>
                What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>
            </div>
          </time-line-item>
        </time-line>
      </div>
    </div>
  </div>
</template>
<script>
  import TimeLine from './Stats/TimeLine.vue'
  import TimeLineItem from './Stats/TimeLineItem.vue'
  import TaskList from './Stats/TaskList'
  import ChartCard from '@/components/UIComponents/Cards/ChartCard.vue'

  export default {
    components: {
      TimeLine,
      TimeLineItem,
      ChartCard,
      TaskList
    },
    computed: {
      widgets () {
        return this.$store.state.Pages[0].widgets
      }
    },
    data () {
      return {
      }
    }
  }
</script>
<style>
</style>
