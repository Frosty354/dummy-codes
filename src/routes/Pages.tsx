import {routeprefixes} from './routePrefixes'
import CkeditorBase from '../Components/CkeditorBase'
import ReactFlowBase from '../Components/ReactFlowBase'
import ExcelCopy from '../Components/ExcelCopy'
import {Page} from './types'
import Homepage from '../Components/Homepage'
import Layout from '../layout/layout'
const {ckeditor,excel,reactflow,homepage}=routeprefixes

export const pages: Page[] = [
  {
      path:`${homepage}`,
      component: <Homepage/>
  },
  { 
    path: `${ckeditor}`, 
    component: <Layout><CkeditorBase/> </Layout>
  },
  { 
    path: `${reactflow}`, 
    component: <Layout><ReactFlowBase/> </Layout>
  },
  { 
    path: `${excel}`, 
    component: <Layout><ExcelCopy/> </Layout>
  },
];