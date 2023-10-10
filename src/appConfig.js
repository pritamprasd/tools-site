import React from 'react'
import GithubSummary from './tools/github_summary/GithubSummary'
import Appearance from './tools/site-settings/Appearance'
import IndexDbSettings from './tools/site-settings/IndexDbSettings'
import MiscSettings from './tools/site-settings/MiscSettings'
import Pretify from './tools/prettify/Pretify'
import ImageClassifier from './tools/image_classifier/ImageClassifier'

export const LSKeys = {
  accentColor: {
    key: 'accent-color',
    type: 'color'
  },
  bgColor: {
    key: 'bg-color',
    type: 'color'
  },
  fontColor: {
    key: 'font-color',
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
      description: "Pulls up Github Public data for a username, and allows set of analytics on it.",
      iconSvg: <svg></svg>,
      tool: <GithubSummary />,
      tags: ["github", "search", "repository"],
      config: {
        default_username: "pritamprasd",
      }
    },
    {
      id: "pretify",
      title: "Code Formatter",
      description: "formats yaml, json",
      iconSvg: <svg></svg>,
      tool: <Pretify/>,
      tags: ["jwt", "json", "yaml"]
    },
    {
      id: "image_classifier",
      title: "Image Detect",
      description: "Laboris nulla ipsum commodo consectetur exercitation tempor nostrud cupidatat sunt officia irure proident fugiat excepteur.",
      iconSvg: <svg></svg>,
      tool: <ImageClassifier />,
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
    ,
    {
      id: "github_summary5",
      title: "Github Summary 5",
      description: "Laboris nulla ipsum commodo consectetur exercitation tempor nostrud cupidatat sunt officia irure proident fugiat excepteur.",
      iconSvg: <svg></svg>,
      tool: <GithubSummary />,
      tags: ["xyzs", "def"]
    }
  ]
}