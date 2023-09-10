import React from 'react'
import GithubSummary from './tools/GithubSummary'

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