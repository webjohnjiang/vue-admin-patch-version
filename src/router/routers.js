import Layout from '@/views/layout'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由。暂时我规定：没定义就是任何角色都能访问
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: Layout, // 虽然不命中，但是作为父亲，当命中其子路由时，父亲的component还是会用上的
    meta: {
      hideInMenu: false, // 这个/路由只做重定向，给他立刻重定向到/home。但是要设置隐藏开关的话，别忘了父亲这里也要设置
      notCache: true
    },
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          hideInMenu: false,
          notCache: true,
          title: '首页',
          icon: 'home'
        },
        component: () => import('@/views/home')
      }
    ]
  },
  {
    path: '/statistic',
    name: 'statistic',
    meta: {
      icon: 'piechart',
      title: '数据大盘'
    },
    component: Layout,
    children: [
      {
        path: 'history',
        name: 'history',
        meta: {
          icon: 'database',
          title: '历史数据'
        },
        component: () => import('@/views/statistic/history')
      },
      {
        path: 'runtime',
        name: 'runtime',
        meta: {
          icon: 'dashboard-fill',
          title: '实时大屏'
        },
        component: () => import('@/views/statistic/runtime')
      }
    ]
  },
  {
    path: '/tracker',
    name: 'tracker',
    meta: {
      icon: 'search',
      title: '行为追踪'
    },
    component: Layout,
    children: [
      {
        path: 'timeline',
        name: 'timeline',
        meta: {
          icon: 'time-circle',
          title: '时间线'
        },
        component: () => import('@/views/tracker/timeline')
      },
      {
        path: 'whitelist',
        name: 'whitelist',
        meta: {
          icon: 'orderedlist',
          title: '白名单' // 目前添加白名单要等用户下次进入后再重新查。后续添加白名单之后，可以在收到日志时加一个消息推送，推到dashboard通知里
        },
        component: () => import('@/views/tracker/whitelist')
      }
    ]
  },
  {
    path: '/project',
    name: 'project',
    meta: {
      icon: 'project-fill',
      title: '项目管理'
    },
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'list',
        meta: {
          icon: 'orderedlist',
          title: '项目列表'
        },
        component: () => import('@/views/project/list')
      },
      {
        path: 'edit',
        name: 'edit',
        meta: {
          icon: 'file-add',
          title: '新建项目'
        },
        component: () => import('@/views/project/edit')
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      icon: 'setting',
      title: '系统管理'
    },
    component: Layout,
    children: [
      {
        path: 'user',
        name: 'user',
        meta: {
          icon: 'user',
          title: '用户管理'
        },
        component: () => import('@/views/system/user')
      },
      {
        path: 'role',
        name: 'role',
        meta: {
          icon: 'team',
          title: '角色管理'
        },
        component: () => import('@/views/system/role')
      },
      {
        path: 'dept',
        name: 'dept',
        meta: {
          icon: 'solution',
          title: '部门管理'
        },
        component: () => import('@/views/system/dept')
      }
    ]
  }
]
