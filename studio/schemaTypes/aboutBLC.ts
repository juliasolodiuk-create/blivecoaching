import {BulbFilledIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const aboutBLC = defineType({
  name: 'aboutBLC',
  title: 'Про Be Live Coaching',
  type: 'document',
  groups: [
    {name: 'ua', title: 'Українська'},
    {name: 'en', title: 'English'},
    {name: 'de', title: 'Deutsch'},
  ],
  icon: BulbFilledIcon,
  fields: [
    defineField({
      name: 'content_ua',
      title: 'Контент',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Заголовок',
          type: 'string',
        }),
        defineField({
          name: 'desc',
          title: 'Опис',
          type: 'array',
          validation: (Rule) => Rule.max(5).error('Можна додати не більше 5 описів'),
          of: [
            defineField({
              name: 'desc',
              title: 'Опис',
              type: 'text',
              validation: (Rule) => Rule.max(500).error('Текст не може перевищувати 500 символів'),
            }),
          ],
        }),
      ],
      group: 'ua',
    }),

    defineField({
      name: 'content_en',
      title: 'Content',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'desc',
          title: 'Description',
          type: 'array',
          validation: (Rule) => Rule.max(5).error('Можна додати не більше 5 описів'),
          of: [
            defineField({
              name: 'desc',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.max(500).error('Текст не може перевищувати 500 символів'),
            }),
          ],
        }),
      ],
      group: 'en',
    }),
    defineField({
      name: 'content_de',
      title: 'Inhalt',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titel',
          type: 'string',
        }),
        defineField({
          name: 'desc',
          title: 'Beschreibung',
          type: 'array',
          validation: (Rule) => Rule.max(5).error('Можна додати не більше 5 описів'),
          of: [
            defineField({
              name: 'desc',
              title: 'Beschreibung',
              type: 'text',
              validation: (Rule) => Rule.max(500).error('Текст не може перевищувати 500 символів'),
            }),
          ],
        }),
      ],
      group: 'de',
    }),
  ],
  preview: {
    select: {
      title: 'content_ua.title',
      subTitle: 'content_ua.desc[0]',
    },
    prepare(selection) {
      const {title, subTitle} = selection
      return {
        title: title || 'Про Be Live Coaching',
        subtitle: subTitle,
      }
    },
  },
})
