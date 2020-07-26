<template>
    <div class="timeline">
      <div class="timeline-searchbar">
        <Input clearable placeholder="用户userId" class="search-input" v-model="searchData.usreName" />
        <Button type="primary" icon="md-search" @click="search">查询</Button>
      </div>
      <div class="timeline-mainwrap">
        <div class="timeline-ctx-list">
          <div class="timeline-ctx-list-title">
            页面访问列表
          </div>
          <Card style="height: 98%;" :dis-hover="true">
            <ul>
              <List size="small" :split="true" item-layout="vertical" class="ctx-list-lists">
                  <ListItem class="ctx-list-item" alt="http://km.oa.com/group/29215/articles/show/326546?kmref=searchrom_page=no=5" title="http://km.oa.com/group/29215/articles/show/326546?kmref=searchrom_page=no=5">
                    <h2 class="ctx-list-time">2020-07-20</h2>
                    <p>http://km.oa.com/group/29215/articles/show/326546?kmref=searchrom_page=no=5</p>
                  </ListItem>
                  <ListItem class="ctx-list-item" alt="http://km.oa.com/group/29215/articles/show/326546?kmref=searchrom_page=no=5" title="http://km.oa.com/group/29215/articles/show/326546?kmref=searchrom_page=no=5">
                    <h2 class="ctx-list-time">2020-07-20</h2>
                    <p>http://km.oa.com/group/29215/articles/show/326546?kmref=searchrom_page=no=5</p>
                  </ListItem>
                  <ListItem class="ctx-list-item" alt="http://km.oa.com/group/29215/articles/show/326546?kmref=searchrom_page=no=5" title="http://km.oa.com/group/29215/articles/show/326546?kmref=searchrom_page=no=5">
                    <h2 class="ctx-list-time">2020-07-20</h2>
                    <p>http://km.oa.com/group/29215/articles/show/326546?kmref=searchrom_page=no=5</p>
                  </ListItem>
              </List>
            </ul>
          </Card>
        </div>
        <div class="timeline-events-info">
          <Tabs class="tabs" value="timeline">
              <TabPane class="timeline-event-card" name="timeline" label="时间线">
                <Timeline>
                  <TimelineItem>
                    <div class="time-node-title">
                      <Tag color="primary">页面进入</Tag>
                      <span class="time">1976年</span>
                    </div>
                    <Card class="time-node-content">
                      <List size="small" :split="false">
                          <ListItem>进入时间: xxxx</ListItem>
                          <ListItem>会话ID: uuuuuuj</ListItem>
                          <ListItem>用户ID: 34343434</ListItem>
                      </List>
                    </Card>
                  </TimelineItem>
                  <TimelineItem color="rgb(245 134 192)">
                    <div class="time-node-title">
                      <Tag color="rgb(245 134 192)">CGI-请求发出</Tag>
                      <span class="time">1976年</span>
                    </div>
                    <Card class="time-node-content">
                       <Tabs class="tabs" value="base">
                         <TabPane class="timeline-event-card" name="base" label="基础信息">
                          <List size="small" :split="false">
                            <ListItem>请求方法: GET</ListItem>
                            <ListItem>请求时间: 2020-07-12</ListItem>
                            <ListItem>This is a piece of text.</ListItem>
                          </List>
                         </TabPane>
                         <TabPane class="timeline-event-card" name="request" label="请求信息">
                           <p>sssssssssss</p>
                         </TabPane>
                       </Tabs>
                    </Card>
                  </TimelineItem>
                  <TimelineItem color="rgb(84 208 195)">
                    <div class="time-node-title">
                      <Tag color="rgb(84 208 195)">打日志</Tag>
                      <span class="time">1976年</span>
                    </div>
                    <Card class="time-node-content">
                      <List size="small" :split="false">
                          <ListItem>This is a piece of text.</ListItem>
                          <ListItem>This is a piece of text.</ListItem>
                          <ListItem>This is a piece of text.</ListItem>
                      </List>
                    </Card>
                  </TimelineItem>
                  <TimelineItem color="rgb(245 134 192)">
                    <div class="time-node-title">
                      <Tag color="rgb(245 134 192)">CGI-响应完毕</Tag>
                      <span class="time">1976年</span>
                      <Tag color="orange" style="margin-left: 8px;">有异常</Tag>
                    </div>
                    <Card class="time-node-content">
                       <Tabs class="tabs" value="base">
                         <TabPane class="timeline-event-card" name="base" label="基础信息">
                          <List size="small" :split="false">
                            <ListItem>请求方法: GET</ListItem>
                            <ListItem>响应状态码: 200</ListItem>
                            <ListItem>请求地址: http://www.baidu.com</ListItem>
                            <ListItem>请求时间: 2020-07-12</ListItem>
                            <ListItem>响应时间: 2020-07-12</ListItem>
                            <ListItem>总耗时: 800毫秒</ListItem>
                          </List>
                         </TabPane>
                         <TabPane class="timeline-event-card" name="request" label="请求信息">
                           <p>sssssssssss</p>
                         </TabPane>
                         <TabPane class="timeline-event-card" name="response" label="响应信息">
                           <p>jjjjjjjjjjjjjsssssssssss</p>
                         </TabPane>
                       </Tabs>
                    </Card>
                  </TimelineItem>
                  <TimelineItem color="#ed4014">
                    <div class="time-node-title">
                      <Tag color="error">页面报错</Tag>
                      <span class="time">1976年</span>
                      <Tag color="orange" style="margin-left: 8px;">有异常</Tag>
                    </div>
                    <Card class="time-node-content">
                      <List size="small" :split="false">
                          <ListItem>类型：资源加载错误</ListItem>
                          <ListItem>报错信息：xxxx</ListItem>
                          <ListItem>This is a piece of text.</ListItem>
                      </List>
                    </Card>
                  </TimelineItem>
                  <TimelineItem color="rgb(122 160 245)">
                    <div class="time-node-title">
                      <Tag color="rgb(122 160 245)">点击事件</Tag>
                      <span class="time">1976年</span>
                    </div>
                    <Card class="time-node-content">
                      <List size="small" :split="false">
                          <ListItem>标签名: &lt;button&gt;</ListItem>
                          <ListItem>XPATH: body &gt; button</ListItem>
                          <ListItem>元素HTML: &lt;button class="red"&gt;&lt;/buttom&gt;</ListItem>
                      </List>
                    </Card>
                  </TimelineItem>
                  <TimelineItem color="#ed4014">
                    <div class="time-node-title">
                      <Tag color="error">页面报错</Tag>
                      <span class="time">1976年</span>
                      <Tag color="orange" style="margin-left: 8px;">有异常</Tag>
                    </div>
                    <Card class="time-node-content">
                      <List size="small" :split="false">
                          <ListItem>类型：语法错误</ListItem>
                          <ListItem>报错信息：xxxx</ListItem>
                          <ListItem>This is a piece of text.</ListItem>
                      </List>
                    </Card>
                  </TimelineItem>
                  <TimelineItem color="rgb(180 89 241)">
                    <div class="time-node-title">
                      <Tag color="rgb(180 89 241)">自定义事件</Tag>
                      <span class="time">1976年</span>
                      <Tag color="orange" style="margin-left: 8px;">有异常</Tag>
                    </div>
                    <Card class="time-node-content">
                      <List size="small" :split="false">
                          <ListItem>事件id：sign</ListItem>
                          <ListItem>事件名：签名完成</ListItem>
                          <ListItem>事件参数: {signatureId: xxx}</ListItem>
                      </List>
                    </Card>
                  </TimelineItem>
                </Timeline>
              </TabPane>
              <TabPane class="timeline-baseinfo-card" name="baseinfo" label="基础信息">
                <Row>
                  <Col span="11">
                    <Card :bordered="false" :dis-hover="true">
                        <p slot="title">网页上下文信息</p>
                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                    </Card>
                    <Card :bordered="false" :dis-hover="true">
                        <p slot="title">SDK信息</p>
                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                    </Card>
                  </Col>
                  <Col span="11" offset="2">
                    <Card :bordered="false" :dis-hover="true">
                      <p slot="title">设备信息</p>
                      <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
</template>
<style lang="less">
  .timeline {
    display: flex;
    flex-direction: column;
  }
  .timeline-searchbar {
    display: flex;
    .search-input {
      width: 220px;
      margin-right: 20px;
    }
  }
  .timeline-mainwrap {
    flex: 1;
    display: flex;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #e0e0e0;
    .timeline-ctx-list-title {
      height: 34px;
      text-align: left;
      display: flex;
      align-items: flex-end;
      padding-bottom: 8px;
      font-size: 14px;
    }
  }
  .timeline-mainwrap .timeline-ctx-list {
    width: 240px;
    margin-right: 15px;
    .ctx-list-lists {
      .ctx-list-item {
        cursor: pointer;
        padding: 10px;
        margin-bottom: 10px;
      }
      .ctx-list-item:hover {
        // 参考 card 组件阴影
        box-shadow: 0 1px 6px rgba(0,0,0,.2);
        border-color: #eee;
      }
    }
    .ctx-list-lists p {
      height: 45px;
      overflow: auto;
    }
    .ctx-list-time {
      font-size: 12px;
    }
  }
  .timeline-mainwrap .timeline-events-info {
    flex: 1;
  }
  .timeline-event-card, .timeline-event-baseinfo-card {
    padding: 5px;
  }
  // timeline 节点样式
  .time-node-content {
    margin-top: 8px;
  }
</style>

<script>
export default {
  name: 'Test',
  data () {
    return {
      searchData: {
        usreName: '',
        email: ''
      }
    }
  },
  methods: {
    search () {
      this.getContextData()
    },
    getContextData () {
      console.log('get data')
    }
  }
}
</script>
