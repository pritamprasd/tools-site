import React, { useState } from 'react'
import GithubSummary from './tools/GithubSummary'

export const appConfig = {
  toolsList: [
    {
      title: "Github Summary",
      description: "Laboris nulla ipsum commodo consectetur exercitation tempor nostrud cupidatat sunt officia irure proident fugiat excepteur.",
      iconSvg: <svg></svg>,
      tool: <GithubSummary />,
      tags: ["abc", "def", "fghi"],
    },
    {
      title: "Github Summary 2",
      description: "Laboris nulla ipsum commodo consectetur exercitation tempor nostrud cupidatat sunt officia irure proident fugiat excepteur.",
      iconSvg: <svg></svg>,
      tool: <GithubSummary />,
      tags: ["xyz", "def", "fghi"]
    },
    {
      title: "Github Summary 3",
      description: "Laboris nulla ipsum commodo consectetur exercitation tempor nostrud cupidatat sunt officia irure proident fugiat excepteur.",
      iconSvg: <svg></svg>,
      tool: <GithubSummary />,
      tags: ["abc", "defg", "adgs", "sdsf", "sgst", "sgts"],
    },
    {
      title: "Github Summary 4",
      description: "Laboris nulla ipsum commodo consectetur exercitation tempor nostrud cupidatat sunt officia irure proident fugiat excepteur.",
      iconSvg: <svg></svg>,
      tool: <GithubSummary />,
      tags: ["xyzs", "def"]
    }
  ]
}