import { Social, SocialElement } from 'mjml-social-nominify'
import { Navbar, NavbarLink } from 'mjml-navbar-nominify'
import { Carousel, CarouselImage } from 'mjml-carousel-nominify'
import {
  Accordion,
  AccordionElement,
  AccordionText,
  AccordionTitle,
} from 'mjml-accordion-nominify'
import Body from 'mjml-body-nominify'
import Head from 'mjml-head-nominify'
import HeadAttributes from 'mjml-head-attributes-nominify'
import HeadBreakpoint from 'mjml-head-breakpoint-nominify'
import HeadHtmlAttributes from 'mjml-head-html-attributes-nominify'
import HeadFont from 'mjml-head-font-nominify'
import HeadPreview from 'mjml-head-preview-nominify'
import HeadStyle from 'mjml-head-style-nominify'
import HeadTitle from 'mjml-head-title-nominify'
import Hero from 'mjml-hero-nominify'
import Button from 'mjml-button-nominify'
import Column from 'mjml-column-nominify'
import Divider from 'mjml-divider-nominify'
import Group from 'mjml-group-nominify'
import Image from 'mjml-image-nominify'
import Raw from 'mjml-raw-nominify'
import Section from 'mjml-section-nominify'
import Spacer from 'mjml-spacer-nominify'
import Text from 'mjml-text-nominify'
import Table from 'mjml-table-nominify'
import Wrapper from 'mjml-wrapper-nominify'
import dependencies from './dependencies'

const components = [
  Body,
  Head,
  HeadAttributes,
  HeadBreakpoint,
  HeadHtmlAttributes,
  HeadFont,
  HeadPreview,
  HeadStyle,
  HeadTitle,
  Hero,
  Button,
  Column,
  Divider,
  Group,
  Image,

  Raw,
  Section,
  Spacer,
  Text,
  Table,
  Wrapper,

  Social,
  SocialElement,
  Navbar,
  NavbarLink,
  Accordion,
  AccordionElement,
  AccordionText,
  AccordionTitle,
  Carousel,
  CarouselImage,
]

const presetCore = {
  components,
  dependencies,
}

export default presetCore
