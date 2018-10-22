import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import pxToDp from '../utils/index';
import EventItem from '../components/EventItem';

export default class Events extends Component {
  state = {
    data: [
      {
          "id": "8440116032",
          "type": "IssuesEvent",
          "actor": {
              "id": 3949015,
              "login": "nimojs",
              "display_login": "nimojs",
              "gravatar_id": "",
              "url": "https://api.github.com/users/nimojs",
              "avatar_url": "https://avatars.githubusercontent.com/u/3949015?"
          },
          "repo": {
              "id": 32590688,
              "name": "onface/gulp-book",
              "url": "https://api.github.com/repos/onface/gulp-book"
          },
          "payload": {
              "action": "closed",
              "issue": {
                  "url": "https://api.github.com/repos/onface/gulp-book/issues/44",
                  "repository_url": "https://api.github.com/repos/onface/gulp-book",
                  "labels_url": "https://api.github.com/repos/onface/gulp-book/issues/44/labels{/name}",
                  "comments_url": "https://api.github.com/repos/onface/gulp-book/issues/44/comments",
                  "events_url": "https://api.github.com/repos/onface/gulp-book/issues/44/events",
                  "html_url": "https://github.com/onface/gulp-book/issues/44",
                  "id": 371361015,
                  "node_id": "MDU6SXNzdWUzNzEzNjEwMTU=",
                  "number": 44,
                  "title": "实验楼向您申请教程《Gulp入门指南》转载授权",
                  "user": {
                      "login": "markiremenber",
                      "id": 22165993,
                      "node_id": "MDQ6VXNlcjIyMTY1OTkz",
                      "avatar_url": "https://avatars1.githubusercontent.com/u/22165993?v=4",
                      "gravatar_id": "",
                      "url": "https://api.github.com/users/markiremenber",
                      "html_url": "https://github.com/markiremenber",
                      "followers_url": "https://api.github.com/users/markiremenber/followers",
                      "following_url": "https://api.github.com/users/markiremenber/following{/other_user}",
                      "gists_url": "https://api.github.com/users/markiremenber/gists{/gist_id}",
                      "starred_url": "https://api.github.com/users/markiremenber/starred{/owner}{/repo}",
                      "subscriptions_url": "https://api.github.com/users/markiremenber/subscriptions",
                      "organizations_url": "https://api.github.com/users/markiremenber/orgs",
                      "repos_url": "https://api.github.com/users/markiremenber/repos",
                      "events_url": "https://api.github.com/users/markiremenber/events{/privacy}",
                      "received_events_url": "https://api.github.com/users/markiremenber/received_events",
                      "type": "User",
                      "site_admin": false
                  },
                  "labels": [],
                  "state": "closed",
                  "locked": false,
                  "assignee": null,
                  "assignees": [],
                  "milestone": null,
                  "comments": 1,
                  "created_at": "2018-10-18T04:53:36Z",
                  "updated_at": "2018-10-18T05:51:15Z",
                  "closed_at": "2018-10-18T05:51:15Z",
                  "author_association": "NONE",
                  "body": "您好，\r\n\r\n我是在线 IT 技术实训平台实验楼（https://shiyanlou.com）的课程运营何宇恒，冒昧打扰您，近期看到您写的《Gulp入门指南》（链接:https://github.com/onface/gulp-book），这是Gulp领域非常优秀的教程，现想向您申请授权转载这篇文章到我们网站的教程库。\r\n\r\n转载的教程会完全开源，在显著位置放上来源以及您的信息，如果您的教程有 Github 仓库，我们会自动同步并引导用户向您的 Github 提交 issue 或 PR 完善教程，如果没有对应的仓库会放在我们的 Github 仓库中，我们也会进行定期同步。实验楼目前有100万用户，在IT领域有一定的影响力，为了让您的教程能影响到更多的用户，特此向您申请转载授权，期待得到您的回复！\r\n\r\n另：通过您发表的教程文章，我们相信您的技术水平。现实验楼在积极对外寻找课程合作者，我们会不定时为合作者发布课程需求，如果您愿意与我们合作制作一些优质的课程（图文形式），欢迎添加我们的微信：shiyanloukecheng\r\n\r\n实验楼，敬上"
              }
          },
          "public": true,
          "created_at": "2018-10-18T05:51:15Z",
          "org": {
              "id": 20395258,
              "login": "onface",
              "gravatar_id": "",
              "url": "https://api.github.com/orgs/onface",
              "avatar_url": "https://avatars.githubusercontent.com/u/20395258?"
          }
      },
      {
          "id": "8440116025",
          "type": "IssueCommentEvent",
          "actor": {
              "id": 3949015,
              "login": "nimojs",
              "display_login": "nimojs",
              "gravatar_id": "",
              "url": "https://api.github.com/users/nimojs",
              "avatar_url": "https://avatars.githubusercontent.com/u/3949015?"
          },
          "repo": {
              "id": 32590688,
              "name": "onface/gulp-book",
              "url": "https://api.github.com/repos/onface/gulp-book"
          },
          "payload": {
              "action": "created",
              "issue": {
                  "url": "https://api.github.com/repos/onface/gulp-book/issues/44",
                  "repository_url": "https://api.github.com/repos/onface/gulp-book",
                  "labels_url": "https://api.github.com/repos/onface/gulp-book/issues/44/labels{/name}",
                  "comments_url": "https://api.github.com/repos/onface/gulp-book/issues/44/comments",
                  "events_url": "https://api.github.com/repos/onface/gulp-book/issues/44/events",
                  "html_url": "https://github.com/onface/gulp-book/issues/44",
                  "id": 371361015,
                  "node_id": "MDU6SXNzdWUzNzEzNjEwMTU=",
                  "number": 44,
                  "title": "实验楼向您申请教程《Gulp入门指南》转载授权",
                  "user": {
                      "login": "markiremenber",
                      "id": 22165993,
                      "node_id": "MDQ6VXNlcjIyMTY1OTkz",
                      "avatar_url": "https://avatars1.githubusercontent.com/u/22165993?v=4",
                      "gravatar_id": "",
                      "url": "https://api.github.com/users/markiremenber",
                      "html_url": "https://github.com/markiremenber",
                      "followers_url": "https://api.github.com/users/markiremenber/followers",
                      "following_url": "https://api.github.com/users/markiremenber/following{/other_user}",
                      "gists_url": "https://api.github.com/users/markiremenber/gists{/gist_id}",
                      "starred_url": "https://api.github.com/users/markiremenber/starred{/owner}{/repo}",
                      "subscriptions_url": "https://api.github.com/users/markiremenber/subscriptions",
                      "organizations_url": "https://api.github.com/users/markiremenber/orgs",
                      "repos_url": "https://api.github.com/users/markiremenber/repos",
                      "events_url": "https://api.github.com/users/markiremenber/events{/privacy}",
                      "received_events_url": "https://api.github.com/users/markiremenber/received_events",
                      "type": "User",
                      "site_admin": false
                  },
                  "labels": [],
                  "state": "closed",
                  "locked": false,
                  "assignee": null,
                  "assignees": [],
                  "milestone": null,
                  "comments": 0,
                  "created_at": "2018-10-18T04:53:36Z",
                  "updated_at": "2018-10-18T05:51:15Z",
                  "closed_at": "2018-10-18T05:51:15Z",
                  "author_association": "NONE",
                  "body": "您好，\r\n\r\n我是在线 IT 技术实训平台实验楼（https://shiyanlou.com）的课程运营何宇恒，冒昧打扰您，近期看到您写的《Gulp入门指南》（链接:https://github.com/onface/gulp-book），这是Gulp领域非常优秀的教程，现想向您申请授权转载这篇文章到我们网站的教程库。\r\n\r\n转载的教程会完全开源，在显著位置放上来源以及您的信息，如果您的教程有 Github 仓库，我们会自动同步并引导用户向您的 Github 提交 issue 或 PR 完善教程，如果没有对应的仓库会放在我们的 Github 仓库中，我们也会进行定期同步。实验楼目前有100万用户，在IT领域有一定的影响力，为了让您的教程能影响到更多的用户，特此向您申请转载授权，期待得到您的回复！\r\n\r\n另：通过您发表的教程文章，我们相信您的技术水平。现实验楼在积极对外寻找课程合作者，我们会不定时为合作者发布课程需求，如果您愿意与我们合作制作一些优质的课程（图文形式），欢迎添加我们的微信：shiyanloukecheng\r\n\r\n实验楼，敬上"
              },
              "comment": {
                  "url": "https://api.github.com/repos/onface/gulp-book/issues/comments/430883520",
                  "html_url": "https://github.com/onface/gulp-book/issues/44#issuecomment-430883520",
                  "issue_url": "https://api.github.com/repos/onface/gulp-book/issues/44",
                  "id": 430883520,
                  "node_id": "MDEyOklzc3VlQ29tbWVudDQzMDg4MzUyMA==",
                  "user": {
                      "login": "nimojs",
                      "id": 3949015,
                      "node_id": "MDQ6VXNlcjM5NDkwMTU=",
                      "avatar_url": "https://avatars2.githubusercontent.com/u/3949015?v=4",
                      "gravatar_id": "",
                      "url": "https://api.github.com/users/nimojs",
                      "html_url": "https://github.com/nimojs",
                      "followers_url": "https://api.github.com/users/nimojs/followers",
                      "following_url": "https://api.github.com/users/nimojs/following{/other_user}",
                      "gists_url": "https://api.github.com/users/nimojs/gists{/gist_id}",
                      "starred_url": "https://api.github.com/users/nimojs/starred{/owner}{/repo}",
                      "subscriptions_url": "https://api.github.com/users/nimojs/subscriptions",
                      "organizations_url": "https://api.github.com/users/nimojs/orgs",
                      "repos_url": "https://api.github.com/users/nimojs/repos",
                      "events_url": "https://api.github.com/users/nimojs/events{/privacy}",
                      "received_events_url": "https://api.github.com/users/nimojs/received_events",
                      "type": "User",
                      "site_admin": false
                  },
                  "created_at": "2018-10-18T05:51:15Z",
                  "updated_at": "2018-10-18T05:51:15Z",
                  "author_association": "MEMBER",
                  "body": "允许转载，要求本教程永久开源不要收费。"
              }
          },
          "public": true,
          "created_at": "2018-10-18T05:51:15Z",
          "org": {
              "id": 20395258,
              "login": "onface",
              "gravatar_id": "",
              "url": "https://api.github.com/orgs/onface",
              "avatar_url": "https://avatars.githubusercontent.com/u/20395258?"
          }
      },
      {
          "id": "8439957020",
          "type": "IssuesEvent",
          "actor": {
              "id": 22165993,
              "login": "markiremenber",
              "display_login": "markiremenber",
              "gravatar_id": "",
              "url": "https://api.github.com/users/markiremenber",
              "avatar_url": "https://avatars.githubusercontent.com/u/22165993?"
          },
          "repo": {
              "id": 32590688,
              "name": "onface/gulp-book",
              "url": "https://api.github.com/repos/onface/gulp-book"
          },
          "payload": {
              "action": "opened",
              "issue": {
                  "url": "https://api.github.com/repos/onface/gulp-book/issues/44",
                  "repository_url": "https://api.github.com/repos/onface/gulp-book",
                  "labels_url": "https://api.github.com/repos/onface/gulp-book/issues/44/labels{/name}",
                  "comments_url": "https://api.github.com/repos/onface/gulp-book/issues/44/comments",
                  "events_url": "https://api.github.com/repos/onface/gulp-book/issues/44/events",
                  "html_url": "https://github.com/onface/gulp-book/issues/44",
                  "id": 371361015,
                  "node_id": "MDU6SXNzdWUzNzEzNjEwMTU=",
                  "number": 44,
                  "title": "实验楼向您申请教程《Gulp入门指南》转载授权",
                  "user": {
                      "login": "markiremenber",
                      "id": 22165993,
                      "node_id": "MDQ6VXNlcjIyMTY1OTkz",
                      "avatar_url": "https://avatars1.githubusercontent.com/u/22165993?v=4",
                      "gravatar_id": "",
                      "url": "https://api.github.com/users/markiremenber",
                      "html_url": "https://github.com/markiremenber",
                      "followers_url": "https://api.github.com/users/markiremenber/followers",
                      "following_url": "https://api.github.com/users/markiremenber/following{/other_user}",
                      "gists_url": "https://api.github.com/users/markiremenber/gists{/gist_id}",
                      "starred_url": "https://api.github.com/users/markiremenber/starred{/owner}{/repo}",
                      "subscriptions_url": "https://api.github.com/users/markiremenber/subscriptions",
                      "organizations_url": "https://api.github.com/users/markiremenber/orgs",
                      "repos_url": "https://api.github.com/users/markiremenber/repos",
                      "events_url": "https://api.github.com/users/markiremenber/events{/privacy}",
                      "received_events_url": "https://api.github.com/users/markiremenber/received_events",
                      "type": "User",
                      "site_admin": false
                  },
                  "labels": [],
                  "state": "open",
                  "locked": false,
                  "assignee": null,
                  "assignees": [],
                  "milestone": null,
                  "comments": 0,
                  "created_at": "2018-10-18T04:53:36Z",
                  "updated_at": "2018-10-18T04:53:36Z",
                  "closed_at": null,
                  "author_association": "NONE",
                  "body": "您好，\r\n\r\n我是在线 IT 技术实训平台实验楼（https://shiyanlou.com）的课程运营何宇恒，冒昧打扰您，近期看到您写的《Gulp入门指南》（链接:https://github.com/onface/gulp-book），这是Gulp领域非常优秀的教程，现想向您申请授权转载这篇文章到我们网站的教程库。\r\n\r\n转载的教程会完全开源，在显著位置放上来源以及您的信息，如果您的教程有 Github 仓库，我们会自动同步并引导用户向您的 Github 提交 issue 或 PR 完善教程，如果没有对应的仓库会放在我们的 Github 仓库中，我们也会进行定期同步。实验楼目前有100万用户，在IT领域有一定的影响力，为了让您的教程能影响到更多的用户，特此向您申请转载授权，期待得到您的回复！\r\n\r\n另：通过您发表的教程文章，我们相信您的技术水平。现实验楼在积极对外寻找课程合作者，我们会不定时为合作者发布课程需求，如果您愿意与我们合作制作一些优质的课程（图文形式），欢迎添加我们的微信：shiyanloukecheng\r\n\r\n实验楼，敬上"
              }
          },
          "public": true,
          "created_at": "2018-10-18T04:53:36Z",
          "org": {
              "id": 20395258,
              "login": "onface",
              "gravatar_id": "",
              "url": "https://api.github.com/orgs/onface",
              "avatar_url": "https://avatars.githubusercontent.com/u/20395258?"
          }
      },
      {
          "id": "8439453155",
          "type": "WatchEvent",
          "actor": {
              "id": 368462,
              "login": "airen",
              "display_login": "airen",
              "gravatar_id": "",
              "url": "https://api.github.com/users/airen",
              "avatar_url": "https://avatars.githubusercontent.com/u/368462?"
          },
          "repo": {
              "id": 147350463,
              "name": "leonardomso/33-js-concepts",
              "url": "https://api.github.com/repos/leonardomso/33-js-concepts"
          },
          "payload": {
              "action": "started"
          },
          "public": true,
          "created_at": "2018-10-18T01:57:10Z"
      },
      {
          "id": "8425929114",
          "type": "WatchEvent",
          "actor": {
              "id": 7917954,
              "login": "dntzhang",
              "display_login": "dntzhang",
              "gravatar_id": "",
              "url": "https://api.github.com/users/dntzhang",
              "avatar_url": "https://avatars.githubusercontent.com/u/7917954?"
          },
          "repo": {
              "id": 82815818,
              "name": "Palindrom/JSONPatcherProxy",
              "url": "https://api.github.com/repos/Palindrom/JSONPatcherProxy"
          },
          "payload": {
              "action": "started"
          },
          "public": true,
          "created_at": "2018-10-16T05:26:01Z",
          "org": {
              "id": 5189327,
              "login": "Palindrom",
              "gravatar_id": "",
              "url": "https://api.github.com/orgs/Palindrom",
              "avatar_url": "https://avatars.githubusercontent.com/u/5189327?"
          }
      },
      {
          "id": "8425715549",
          "type": "WatchEvent",
          "actor": {
              "id": 7917954,
              "login": "dntzhang",
              "display_login": "dntzhang",
              "gravatar_id": "",
              "url": "https://api.github.com/users/dntzhang",
              "avatar_url": "https://avatars.githubusercontent.com/u/7917954?"
          },
          "repo": {
              "id": 43479977,
              "name": "anywhichway/proxy-observe",
              "url": "https://api.github.com/repos/anywhichway/proxy-observe"
          },
          "payload": {
              "action": "started"
          },
          "public": true,
          "created_at": "2018-10-16T04:07:48Z"
      },
      {
          "id": "8425475919",
          "type": "WatchEvent",
          "actor": {
              "id": 7917954,
              "login": "dntzhang",
              "display_login": "dntzhang",
              "gravatar_id": "",
              "url": "https://api.github.com/users/dntzhang",
              "avatar_url": "https://avatars.githubusercontent.com/u/7917954?"
          },
          "repo": {
              "id": 83315560,
              "name": "dobjs/dob",
              "url": "https://api.github.com/repos/dobjs/dob"
          },
          "payload": {
              "action": "started"
          },
          "public": true,
          "created_at": "2018-10-16T02:45:29Z",
          "org": {
              "id": 32093464,
              "login": "dobjs",
              "gravatar_id": "",
              "url": "https://api.github.com/orgs/dobjs",
              "avatar_url": "https://avatars.githubusercontent.com/u/32093464?"
          }
      },
      {
          "id": "8425461830",
          "type": "WatchEvent",
          "actor": {
              "id": 7917954,
              "login": "dntzhang",
              "display_login": "dntzhang",
              "gravatar_id": "",
              "url": "https://api.github.com/users/dntzhang",
              "avatar_url": "https://avatars.githubusercontent.com/u/7917954?"
          },
          "repo": {
              "id": 60166938,
              "name": "nx-js/observer-util",
              "url": "https://api.github.com/repos/nx-js/observer-util"
          },
          "payload": {
              "action": "started"
          },
          "public": true,
          "created_at": "2018-10-16T02:40:53Z",
          "org": {
              "id": 24852660,
              "login": "nx-js",
              "gravatar_id": "",
              "url": "https://api.github.com/orgs/nx-js",
              "avatar_url": "https://avatars.githubusercontent.com/u/24852660?"
          }
      },
      {
          "id": "8419376733",
          "type": "WatchEvent",
          "actor": {
              "id": 7917954,
              "login": "dntzhang",
              "display_login": "dntzhang",
              "gravatar_id": "",
              "url": "https://api.github.com/users/dntzhang",
              "avatar_url": "https://avatars.githubusercontent.com/u/7917954?"
          },
          "repo": {
              "id": 82095231,
              "name": "ionic-team/stencil",
              "url": "https://api.github.com/repos/ionic-team/stencil"
          },
          "payload": {
              "action": "started"
          },
          "public": true,
          "created_at": "2018-10-15T06:33:08Z",
          "org": {
              "id": 3171503,
              "login": "ionic-team",
              "gravatar_id": "",
              "url": "https://api.github.com/orgs/ionic-team",
              "avatar_url": "https://avatars.githubusercontent.com/u/3171503?"
          }
      },
      {
          "id": "8416955816",
          "type": "WatchEvent",
          "actor": {
              "id": 7917954,
              "login": "dntzhang",
              "display_login": "dntzhang",
              "gravatar_id": "",
              "url": "https://api.github.com/users/dntzhang",
              "avatar_url": "https://avatars.githubusercontent.com/u/7917954?"
          },
          "repo": {
              "id": 94498635,
              "name": "dawnlabs/carbon",
              "url": "https://api.github.com/repos/dawnlabs/carbon"
          },
          "payload": {
              "action": "started"
          },
          "public": true,
          "created_at": "2018-10-14T09:31:07Z",
          "org": {
              "id": 25232884,
              "login": "dawnlabs",
              "gravatar_id": "",
              "url": "https://api.github.com/orgs/dawnlabs",
              "avatar_url": "https://avatars.githubusercontent.com/u/25232884?"
          }
      },
      {
          "id": "8416754196",
          "type": "CreateEvent",
          "actor": {
              "id": 472311,
              "login": "phodal",
              "display_login": "phodal",
              "gravatar_id": "",
              "url": "https://api.github.com/users/phodal",
              "avatar_url": "https://avatars.githubusercontent.com/u/472311?"
          },
          "repo": {
              "id": 152947763,
              "name": "phodal/app-test-demo",
              "url": "https://api.github.com/repos/phodal/app-test-demo"
          },
          "payload": {
              "ref": null,
              "ref_type": "repository",
              "master_branch": "master",
              "description": "APP Test DEMO",
              "pusher_type": "user"
          },
          "public": true,
          "created_at": "2018-10-14T06:56:26Z"
      },
      {
          "id": "8416255464",
          "type": "WatchEvent",
          "actor": {
              "id": 7917954,
              "login": "dntzhang",
              "display_login": "dntzhang",
              "gravatar_id": "",
              "url": "https://api.github.com/users/dntzhang",
              "avatar_url": "https://avatars.githubusercontent.com/u/7917954?"
          },
          "repo": {
              "id": 67723354,
              "name": "webcomponents/custom-elements",
              "url": "https://api.github.com/repos/webcomponents/custom-elements"
          },
          "payload": {
              "action": "started"
          },
          "public": true,
          "created_at": "2018-10-13T23:30:15Z",
          "org": {
              "id": 1905708,
              "login": "webcomponents",
              "gravatar_id": "",
              "url": "https://api.github.com/orgs/webcomponents",
              "avatar_url": "https://avatars.githubusercontent.com/u/1905708?"
          }
      },
      {
          "id": "8415238195",
          "type": "CreateEvent",
          "actor": {
              "id": 905434,
              "login": "ruanyf",
              "display_login": "ruanyf",
              "gravatar_id": "",
              "url": "https://api.github.com/users/ruanyf",
              "avatar_url": "https://avatars.githubusercontent.com/u/905434?"
          },
          "repo": {
              "id": 152870372,
              "name": "ruanyf/weekly",
              "url": "https://api.github.com/repos/ruanyf/weekly"
          },
          "payload": {
              "ref": null,
              "ref_type": "repository",
              "master_branch": "master",
              "description": "技术分享周刊，每周五发布",
              "pusher_type": "user"
          },
          "public": true,
          "created_at": "2018-10-13T12:36:07Z"
      },
      {
          "id": "8415211908",
          "type": "WatchEvent",
          "actor": {
              "id": 7917954,
              "login": "dntzhang",
              "display_login": "dntzhang",
              "gravatar_id": "",
              "url": "https://api.github.com/users/dntzhang",
              "avatar_url": "https://avatars.githubusercontent.com/u/7917954?"
          },
          "repo": {
              "id": 67362231,
              "name": "halfzebra/create-elm-app",
              "url": "https://api.github.com/repos/halfzebra/create-elm-app"
          },
          "payload": {
              "action": "started"
          },
          "public": true,
          "created_at": "2018-10-13T12:17:40Z"
      },
      {
          "id": "8415211595",
          "type": "WatchEvent",
          "actor": {
              "id": 7917954,
              "login": "dntzhang",
              "display_login": "dntzhang",
              "gravatar_id": "",
              "url": "https://api.github.com/users/dntzhang",
              "avatar_url": "https://avatars.githubusercontent.com/u/7917954?"
          },
          "repo": {
              "id": 67723354,
              "name": "webcomponents/custom-elements",
              "url": "https://api.github.com/repos/webcomponents/custom-elements"
          },
          "payload": {
              "action": "started"
          },
          "public": true,
          "created_at": "2018-10-13T12:17:26Z",
          "org": {
              "id": 1905708,
              "login": "webcomponents",
              "gravatar_id": "",
              "url": "https://api.github.com/orgs/webcomponents",
              "avatar_url": "https://avatars.githubusercontent.com/u/1905708?"
          }
      },
      {
          "id": "8414735080",
          "type": "ForkEvent",
          "actor": {
              "id": 559179,
              "login": "airyland",
              "display_login": "airyland",
              "gravatar_id": "",
              "url": "https://api.github.com/users/airyland",
              "avatar_url": "https://avatars.githubusercontent.com/u/559179?"
          },
          "repo": {
              "id": 9384267,
              "name": "electron/electron",
              "url": "https://api.github.com/repos/electron/electron"
          },
          "payload": {
              "forkee": {
                  "id": 152842446,
                  "node_id": "MDEwOlJlcG9zaXRvcnkxNTI4NDI0NDY=",
                  "name": "electron",
                  "full_name": "airyland/electron",
                  "private": false,
                  "owner": {
                      "login": "airyland",
                      "id": 559179,
                      "node_id": "MDQ6VXNlcjU1OTE3OQ==",
                      "avatar_url": "https://avatars2.githubusercontent.com/u/559179?v=4",
                      "gravatar_id": "",
                      "url": "https://api.github.com/users/airyland",
                      "html_url": "https://github.com/airyland",
                      "followers_url": "https://api.github.com/users/airyland/followers",
                      "following_url": "https://api.github.com/users/airyland/following{/other_user}",
                      "gists_url": "https://api.github.com/users/airyland/gists{/gist_id}",
                      "starred_url": "https://api.github.com/users/airyland/starred{/owner}{/repo}",
                      "subscriptions_url": "https://api.github.com/users/airyland/subscriptions",
                      "organizations_url": "https://api.github.com/users/airyland/orgs",
                      "repos_url": "https://api.github.com/users/airyland/repos",
                      "events_url": "https://api.github.com/users/airyland/events{/privacy}",
                      "received_events_url": "https://api.github.com/users/airyland/received_events",
                      "type": "User",
                      "site_admin": false
                  },
                  "html_url": "https://github.com/airyland/electron",
                  "description": "Build cross-platform desktop apps with JavaScript, HTML, and CSS",
                  "fork": true,
                  "url": "https://api.github.com/repos/airyland/electron",
                  "forks_url": "https://api.github.com/repos/airyland/electron/forks",
                  "keys_url": "https://api.github.com/repos/airyland/electron/keys{/key_id}",
                  "collaborators_url": "https://api.github.com/repos/airyland/electron/collaborators{/collaborator}",
                  "teams_url": "https://api.github.com/repos/airyland/electron/teams",
                  "hooks_url": "https://api.github.com/repos/airyland/electron/hooks",
                  "issue_events_url": "https://api.github.com/repos/airyland/electron/issues/events{/number}",
                  "events_url": "https://api.github.com/repos/airyland/electron/events",
                  "assignees_url": "https://api.github.com/repos/airyland/electron/assignees{/user}",
                  "branches_url": "https://api.github.com/repos/airyland/electron/branches{/branch}",
                  "tags_url": "https://api.github.com/repos/airyland/electron/tags",
                  "blobs_url": "https://api.github.com/repos/airyland/electron/git/blobs{/sha}",
                  "git_tags_url": "https://api.github.com/repos/airyland/electron/git/tags{/sha}",
                  "git_refs_url": "https://api.github.com/repos/airyland/electron/git/refs{/sha}",
                  "trees_url": "https://api.github.com/repos/airyland/electron/git/trees{/sha}",
                  "statuses_url": "https://api.github.com/repos/airyland/electron/statuses/{sha}",
                  "languages_url": "https://api.github.com/repos/airyland/electron/languages",
                  "stargazers_url": "https://api.github.com/repos/airyland/electron/stargazers",
                  "contributors_url": "https://api.github.com/repos/airyland/electron/contributors",
                  "subscribers_url": "https://api.github.com/repos/airyland/electron/subscribers",
                  "subscription_url": "https://api.github.com/repos/airyland/electron/subscription",
                  "commits_url": "https://api.github.com/repos/airyland/electron/commits{/sha}",
                  "git_commits_url": "https://api.github.com/repos/airyland/electron/git/commits{/sha}",
                  "comments_url": "https://api.github.com/repos/airyland/electron/comments{/number}",
                  "issue_comment_url": "https://api.github.com/repos/airyland/electron/issues/comments{/number}",
                  "contents_url": "https://api.github.com/repos/airyland/electron/contents/{+path}",
                  "compare_url": "https://api.github.com/repos/airyland/electron/compare/{base}...{head}",
                  "merges_url": "https://api.github.com/repos/airyland/electron/merges",
                  "archive_url": "https://api.github.com/repos/airyland/electron/{archive_format}{/ref}",
                  "downloads_url": "https://api.github.com/repos/airyland/electron/downloads",
                  "issues_url": "https://api.github.com/repos/airyland/electron/issues{/number}",
                  "pulls_url": "https://api.github.com/repos/airyland/electron/pulls{/number}",
                  "milestones_url": "https://api.github.com/repos/airyland/electron/milestones{/number}",
                  "notifications_url": "https://api.github.com/repos/airyland/electron/notifications{?since,all,participating}",
                  "labels_url": "https://api.github.com/repos/airyland/electron/labels{/name}",
                  "releases_url": "https://api.github.com/repos/airyland/electron/releases{/id}",
                  "deployments_url": "https://api.github.com/repos/airyland/electron/deployments",
                  "created_at": "2018-10-13T06:27:41Z",
                  "updated_at": "2018-10-13T04:18:39Z",
                  "pushed_at": "2018-10-13T04:15:02Z",
                  "git_url": "git://github.com/airyland/electron.git",
                  "ssh_url": "git@github.com:airyland/electron.git",
                  "clone_url": "https://github.com/airyland/electron.git",
                  "svn_url": "https://github.com/airyland/electron",
                  "homepage": "https://electronjs.org",
                  "size": 44737,
                  "stargazers_count": 0,
                  "watchers_count": 0,
                  "language": null,
                  "has_issues": false,
                  "has_projects": true,
                  "has_downloads": true,
                  "has_wiki": false,
                  "has_pages": false,
                  "forks_count": 0,
                  "mirror_url": null,
                  "archived": false,
                  "open_issues_count": 0,
                  "license": {
                      "key": "mit",
                      "name": "MIT License",
                      "spdx_id": "MIT",
                      "url": "https://api.github.com/licenses/mit",
                      "node_id": "MDc6TGljZW5zZTEz"
                  },
                  "forks": 0,
                  "open_issues": 0,
                  "watchers": 0,
                  "default_branch": "master",
                  "public": true
              }
          },
          "public": true,
          "created_at": "2018-10-13T06:27:42Z",
          "org": {
              "id": 13409222,
              "login": "electron",
              "gravatar_id": "",
              "url": "https://api.github.com/orgs/electron",
              "avatar_url": "https://avatars.githubusercontent.com/u/13409222?"
          }
      },
      {
          "id": "8414618510",
          "type": "WatchEvent",
          "actor": {
              "id": 7917954,
              "login": "dntzhang",
              "display_login": "dntzhang",
              "gravatar_id": "",
              "url": "https://api.github.com/users/dntzhang",
              "avatar_url": "https://avatars.githubusercontent.com/u/7917954?"
          },
          "repo": {
              "id": 15766529,
              "name": "shama/webpack-stream",
              "url": "https://api.github.com/repos/shama/webpack-stream"
          },
          "payload": {
              "action": "started"
          },
          "public": true,
          "created_at": "2018-10-13T04:50:44Z"
      },
      {
          "id": "8414567293",
          "type": "WatchEvent",
          "actor": {
              "id": 7917954,
              "login": "dntzhang",
              "display_login": "dntzhang",
              "gravatar_id": "",
              "url": "https://api.github.com/users/dntzhang",
              "avatar_url": "https://avatars.githubusercontent.com/u/7917954?"
          },
          "repo": {
              "id": 144023882,
              "name": "IamManchanda/gulp-webpack",
              "url": "https://api.github.com/repos/IamManchanda/gulp-webpack"
          },
          "payload": {
              "action": "started"
          },
          "public": true,
          "created_at": "2018-10-13T04:06:05Z"
      },
      {
          "id": "8402832765",
          "type": "WatchEvent",
          "actor": {
              "id": 472311,
              "login": "phodal",
              "display_login": "phodal",
              "gravatar_id": "",
              "url": "https://api.github.com/users/phodal",
              "avatar_url": "https://avatars.githubusercontent.com/u/472311?"
          },
          "repo": {
              "id": 1274749,
              "name": "browserstate/history.js",
              "url": "https://api.github.com/repos/browserstate/history.js"
          },
          "payload": {
              "action": "started"
          },
          "public": true,
          "created_at": "2018-10-11T08:03:57Z",
          "org": {
              "id": 3504318,
              "login": "browserstate",
              "gravatar_id": "",
              "url": "https://api.github.com/orgs/browserstate",
              "avatar_url": "https://avatars.githubusercontent.com/u/3504318?"
          }
      },
      {
          "id": "8401693942",
          "type": "WatchEvent",
          "actor": {
              "id": 472311,
              "login": "phodal",
              "display_login": "phodal",
              "gravatar_id": "",
              "url": "https://api.github.com/users/phodal",
              "avatar_url": "https://avatars.githubusercontent.com/u/472311?"
          },
          "repo": {
              "id": 2622727,
              "name": "kevinsawicki/http-request",
              "url": "https://api.github.com/repos/kevinsawicki/http-request"
          },
          "payload": {
              "action": "started"
          },
          "public": true,
          "created_at": "2018-10-11T02:28:39Z"
      }
  ]
  }
  static navigationOptions = {
    title: 'Events',
  };
  componentDidMount() {
    console.log('event did mount');
  }

  _keyExtractor = (item, index) => (item.id + '');

  _renderItemView = (item) => (
    <EventItem {...item}></EventItem>
  )

  _separator() {
    return <View style={{ height: pxToDp(1), backgroundColor: '#ccc' }} />;
  }

  render() {
    const { data, isRefreshing } = this.state;
    return (
      <FlatList
        data={data}
        onEndReachedThreshold={1}
        renderItem={this._renderItemView}
        keyExtractor={this._keyExtractor}
        ItemSeparatorComponent={this._separator}
      />
    );
  }
}

const styles = StyleSheet.create({
  head: {
    height: 76,
    backgroundColor: "#343434",
    paddingTop: 30
  }
});