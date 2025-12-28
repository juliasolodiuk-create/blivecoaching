import type {StructureResolver} from 'sanity/structure'
import {
  ActivityIcon,
  BookIcon,
  BulbFilledIcon,
  CogIcon,
  HighlightIcon,
  ImageIcon,
  LinkIcon,
  ListIcon,
  PresentationIcon,
  RocketIcon,
  SparkleIcon,
  TrendUpwardIcon,
  UserIcon,
  VersionsIcon,
} from '@sanity/icons'
import {BarChartIcon} from '@sanity/icons'
import {FeedbackIcon} from '@sanity/icons'
import {SparklesIcon} from '@sanity/icons'
import {InfoOutlineIcon} from '@sanity/icons'
import {EnvelopeIcon} from '@sanity/icons'
import {BulbOutlineIcon} from '@sanity/icons'
import {MasterDetailIcon} from '@sanity/icons'
import {TwitterIcon} from '@sanity/icons'
import {TargetIcon} from '@sanity/icons'
import {AsteriskIcon} from '@sanity/icons'
import {BugIcon} from '@sanity/icons'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Контент')
    .items([
      S.listItem()
        .title('Початкова секція')
        .icon(VersionsIcon)
        .child(S.document().schemaType('hero').documentId('hero')),

      S.listItem()
        .title('Проблеми')
        .icon(BugIcon)
        .child(
          S.list()
            .title('Розділи')
            .items([
              // Используем documentListItem вместо listItem
              S.documentListItem().schemaType('problems').id('problem_one_id').title('Проблема №1'), // Это заголовок по умолчанию, пока поле пустое

              S.documentListItem().schemaType('problems').id('problem_two_id').title('Проблема №2'),

              S.documentListItem()
                .schemaType('problems')
                .id('problem_three_id')
                .title('Проблема №3'),

              S.divider(),

              S.documentListItem().schemaType('link').id('shared_problem_link').title('Посилання'),
            ]),
        ),

      S.listItem()
        .title('Переваги')
        .icon(TrendUpwardIcon)
        .child(
          S.list()
            .title('Розділи')
            .items([
              // Используем documentListItem вместо listItem
              S.documentListItem().schemaType('benefits').id('benefit_one_id'),

              S.documentListItem().schemaType('benefits').id('benefit_two_id'),

              S.documentListItem().schemaType('benefits').id('benefit_three_id'),
              S.documentListItem().schemaType('benefits').id('benefit_four_id'),

              S.divider(),
              S.documentListItem().schemaType('img').id('benefit_img').title('Картинка'),
              S.documentListItem().schemaType('link').id('shared_benefit_link').title('Посилання'),
            ]),
        ),
      S.listItem()
        .title('Баннер з посиланням - Головна Сторінка')
        .icon(PresentationIcon)
        .child(
          S.list()
            .title('Розділи')
            .items([
              // Используем documentListItem вместо listItem
              S.documentListItem().schemaType('banner').id('home_bannerCTA'),
              S.divider(),
              S.documentListItem().schemaType('link').id('home_bannerCTA_link').title('Посилання'),
            ]),
        ),
      S.listItem()
        .title('Відгуки')
        .icon(FeedbackIcon)
        .child(() => S.documentTypeList('feedback').title('Відгуки')),
      S.listItem()
        .title('Питання')
        .icon(SparklesIcon)
        .child(() => S.documentTypeList('faq').title('Питання')),

      S.listItem()
        .title('Загальне Посилання')
        .icon(LinkIcon)
        .child(S.document().schemaType('link').id('main_link').title('Посилання')),

      S.divider(),
      S.listItem()
        .title('Блог')
        .icon(ListIcon)
        .child(() => S.documentTypeList('blog').title('Пост')),
      S.listItem()
        .title('Highlight')
        .icon(HighlightIcon)
        .child(S.document().schemaType('highlight').documentId('highlight_blog')),
      S.divider(),
      S.listItem()
        .title('Про Мене')
        .icon(UserIcon)
        .child(S.document().schemaType('aboutMe').documentId('aboutMe')),
      S.listItem()
        .title('Моє Чому')
        .icon(ActivityIcon)
        .child(S.document().schemaType('myWhy').documentId('myWhy')),
      S.listItem()
        .title('Баннер - Про Мене')
        .icon(PresentationIcon)
        .child(
          S.list()
            .title('Розділи')
            .items([
              // Используем documentListItem вместо listItem
              S.documentListItem().schemaType('banner').id('about_banner'),
            ]),
        ),
      S.listItem()
        .title('Про ICA')
        .icon(BookIcon)
        .child(() => S.documentTypeList('aboutICA').title('Про ICA')),
      S.listItem()
        .title('Баннер з посиланням - Про Мене')
        .icon(PresentationIcon)
        .child(
          S.list()
            .title('Розділи')
            .items([
              // Используем documentListItem вместо listItem
              S.documentListItem().schemaType('banner').id('about_bannerCTA'),
              S.divider(),
              S.documentListItem().schemaType('link').id('about_bannerCTA_link').title('Посилання'),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Як Обрати Коуча')
        .icon(BulbFilledIcon)
        .child(S.document().schemaType('guide').documentId('guide')),

      S.divider(),
      S.listItem()
        .title('Початкова Секція з Скроллом - Be Live Coaching')
        .icon(VersionsIcon)
        .child(
          S.document().schemaType('heroTitleScroll').documentId('beLiveCoaching_heroTitleScroll'),
        ),
      S.listItem()
        .title('Фонова картинка для Be Live Coaching')
        .icon(ImageIcon)
        .child(S.document().schemaType('img').documentId('beLiveCoaching_img')),

      S.listItem()
        .title('Про Be Live Coaching')
        .icon(BulbFilledIcon)
        .child(
          S.list()
            .title('Розділи')
            .items([
              // Используем documentListItem вместо listItem
              S.documentListItem().schemaType('aboutBLC').id('aboutBLC'),
              S.divider(),
              S.documentListItem().schemaType('img').id('aboutBLC_img').title('Посилання'),
            ]),
        ),
      S.listItem()
        .title('Як Це Працює')
        .icon(RocketIcon)
        .child(
          S.list()
            .title('Розділи')
            .items([S.documentListItem().schemaType('howItWorks').id('howItWorks')]),
        ),
      S.divider(),
      S.listItem()
        .title('Іконки')
        .icon(AsteriskIcon)
        .child(() => S.documentTypeList('icons').title('Іконки')),
      S.listItem()
        .title('SEO Налаштування')
        .icon(CogIcon)
        .child(S.document().schemaType('seo').documentId('seo')),
    ])
