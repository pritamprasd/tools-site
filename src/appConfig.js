import React from 'react'
import GithubSummary from './tools/GithubSummary'
import Appearance from './tools/site-settings/Appearance'
import IndexDbSettings from './tools/site-settings/IndexDbSettings'
import MiscSettings from './tools/site-settings/MiscSettings'

export const LSKeys = {
  accentColor: {
    key: 'accent-color',
    type: 'color'
  },
}

export const tabs = [
  {
    id: "appearance",
    title: "Appearance",
    component: <Appearance />
  },
  {
    id: "indexdb",
    title: "Index DB Settings",
    component: <IndexDbSettings />
  },
  {
    id: "misc",
    title: "Misc. Settings",
    component: <MiscSettings />
  }
]

export const appConfig = {
  toolsList: [
    {
      id: "github_summary",
      title: "Github Summary",
      description: "Laboris nulla ipsum commodo consectetur exercitation tempor nostrud cupidatat sunt officia irure proident fugiat excepteur.",
      iconSvg: <svg></svg>,
      tool: <GithubSummary />,
      tags: ["abc", "def", "fghi"],
    },
    {
      id: "github_summary2",
      title: "Yolo Summary 2",
      description: "Laboris nulla ipsum commodo consectetur exercitation tempor nostrud cupidatat sunt officia irure proident fugiat excepteur.",
      iconSvg: <svg></svg>,
      tool: <GithubSummary />,
      tags: ["xyz", "def", "fghi"]
    },
    {
      id: "github_summary3",
      title: "Github Summary 3",
      description: "Laboris nulla ipsum commodo consectetur exercitation tempor nostrud cupidatat sunt officia irure proident fugiat excepteur.",
      iconSvg: <svg></svg>,
      tool: <GithubSummary />,
      tags: ["abc", "defg", "adgs", "sdsf", "sgst", "sgts"],
    },
    {
      id: "github_summary4",
      title: "Github Summary 4",
      description: "Laboris nulla ipsum commodo consectetur exercitation tempor nostrud cupidatat sunt officia irure proident fugiat excepteur.",
      iconSvg: <svg></svg>,
      tool: <GithubSummary />,
      tags: ["xyzs", "def"]
    }
  ]
}