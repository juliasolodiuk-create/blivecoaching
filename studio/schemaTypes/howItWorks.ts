import {defineField, defineType} from 'sanity'
import {RocketIcon} from '@sanity/icons'

export const howItWorks = defineType({
  name: 'howItWorks',
  title: 'Як це працює',
  type: 'document',
  groups: [
    {name: 'ua', title: 'Українська'},
    {name: 'en', title: 'English'},
    {name: 'de', title: 'Deutsch'},
  ],
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'content_ua',
      title: 'Опис',
      type: 'array',
      group: 'ua',
      of: [
        defineField({
          name: 'desc',
          title: 'Опис',
          type: 'text',
        }),
      ],
    }),

    defineField({
      name: 'content_en',
      title: 'Description',
      type: 'array',
      group: 'en',
      of: [
        defineField({
          name: 'desc',
          title: 'Description',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'content_de',
      title: 'Beschreibung',
      type: 'array',
      group: 'de',
      of: [
        defineField({
          name: 'desc',
          title: 'Beschreibung',
          type: 'text',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Як це працює',
      }
    },
  },
})
