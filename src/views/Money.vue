<template>
    <Layout class-prefix="layout">
        <Types :value.sync="record.type"/>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
        <Notes @update:value="onUpdateNotes"/>
        <NumberPad :value.sync="record.amount" class="fen" @submit="saveRecord"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import Notes from '@/components/Money/Notes.vue';
    import Tags from '@/components/Money/Tags.vue';
    import {Component, Watch} from 'vue-property-decorator';
    import recordListModel from '@/models/recordListModel';

    const recordList = recordListModel.fetch();

    @Component({
        components: {Tags, Notes, Types, NumberPad}
    })
    export default class Money extends Vue {
        tags = ['衣', '食', '住', '行', '彩票'];
        recordList: RecordItem[] = recordList;
        record: RecordItem = {
            tags: [], notes: '', type: '-', amount: 0
        };
        onUpdateTags(value: string[]) {
            this.record.tags = value;
        }
        onUpdateNotes(value: string) {
            this.record.notes = value;
        }
        saveRecord() {
            const record2: RecordItem = recordListModel.clone(this.record);
            record2.createdAt = new Date();
            this.recordList.push(record2);
        }
        @Watch('recordList')
        onRecordListChange() {
            recordListModel.save(this.recordList);
        }
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;

    }

</style>
