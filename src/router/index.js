import { createRouter, createWebHistory } from "vue-router"

import Home from "../components/Home";

// home
import SiteMap from "../components/home/SiteMap";
import Map from "../components/home/Map";
import Demo from "../components/home/Demo";
import User from "../components/home/User";
import Setting from "../components/home/Setting";

// gitbook
import Regex from "../components/gitbook/Regex";
import Git from "../components/gitbook/Git";
import HTML from "../components/gitbook/HTML";
import JavaScript from "../components/gitbook/JavaScript";
import Linux from "../components/gitbook/Linux";
import MySQL from "../components/gitbook/MySQL";
import PHP from "../components/gitbook/PHP";
import Vue from "../components/gitbook/Vue";
import NoteBook from "../components/gitbook/NoteBook";
import Projects from "../components/gitbook/Projects";


const routes = [
    {
        path: '/',
        //redirect: '/home',
        component: Home,
        children: [
            {
                path: '/',
                component: SiteMap
            },
            {
                path: 'map',
                component: Map
            },
            {
                path: 'demo',
                component: Demo
            },
            {
                path: 'user',
                component: User
            },
            {
                path: 'setting',
                component: Setting
            }
        ]
    },
    // gitbook
    {path: '/html', component: HTML},
    {path: '/regex', component: Regex},
    {path: '/git', component: Git},
    {path: '/linux', component: Linux},
    {path: '/php', component: PHP},
    {path: '/projects', component: Projects},
    {path: '/notebook', component: NoteBook},
    {path: '/vue', component: Vue},
    {path: '/javascript', component: JavaScript},
    {path: '/mysql', component: MySQL},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router



