import { Social, SocialElement } from 'mjml-social-cs-nominify'
import { Navbar, NavbarLink } from 'mjml-navbar-cs-nominify'
import { Carousel, CarouselImage } from 'mjml-carousel-cs-nominify'
import {
  Accordion,
  AccordionElement,
  AccordionText,
  AccordionTitle,
} from 'mjml-accordion-cs-nominify'
import Body from 'mjml-body-cs-nominify'
import Head from 'mjml-head-cs-nominify'
import HeadAttributes from 'mjml-head-attributes-cs-nominify'
import HeadBreakpoint from 'mjml-head-breakpoint-cs-nominify'
import HeadHtmlAttributes from 'mjml-head-html-attributes-cs-nominify'
import HeadFont from 'mjml-head-font-cs-nominify'
import HeadPreview from 'mjml-head-preview-cs-nominify'
import HeadStyle from 'mjml-head-style-cs-nominify'
import HeadTitle from 'mjml-head-title-cs-nominify'
import Hero from 'mjml-hero-cs-nominify'
import Button from 'mjml-button-cs-nominify'
import Column from 'mjml-column-cs-nominify'
import Divider from 'mjml-divider-cs-nominify'
import Group from 'mjml-group-cs-nominify'
import Image from 'mjml-image-cs-nominify'
import Raw from 'mjml-raw-cs-nominify'
import Section from 'mjml-section-cs-nominify'
import Spacer from 'mjml-spacer-cs-nominify'
import Text from 'mjml-text-cs-nominify'
import Table from 'mjml-table-cs-nominify'
import Wrapper from 'mjml-wrapper-cs-nominify'
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
