<template>
  <div class="input-comp">
    <label class="btn-calendar" for="datepick"><i  class="ec ec-calendar"></i></label>
    <date-pick v-datePickerId v-model="task.date" :pickTime="true" :format="format"></date-pick>
    <input class="input-task" v-model="task.content" :placeholder="$t('feature.inputPlaceholder')">
    <button class="add-btn btn-no-border" :disabled="!task.content" @click="addTask()"><span class="icon-plus">+</span></button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  // tslint:disable-next-line
  import DatePick from 'vue-date-pick/src/vueDatePick.vue';
  import { Task } from '../../../helpers/models/task.interface';
  import moment from 'moment';

  @Component({
    components: {
      DatePick,
    },
    directives: {
      datePickerId: (el, binding) => {
        if (el.children[0]) {
          const input: any = el.children[0];
          input.setAttribute('id', 'datepick');
          input.style.display = 'none';
        }
      },
    },
  })
  export default class InputTask extends Vue {
    private format = 'YYYY-MM-DD HH:mm';
    private task: Task = {
      id: undefined,
      content: '',
      date: `${moment().format(this.format)}`,
      type: 0,
      name: '',
    };

    private addTask() {
      this.$store.dispatch('createTask', {...this.task});
      this.task.content = '';
    }
  }
</script>
