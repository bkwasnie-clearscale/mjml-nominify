import { Social, SocialElement } from 'mjml-social-snyk'
import { Navbar, NavbarLink } from 'mjml-navbar-snyk'
import { Carousel, CarouselImage } from 'mjml-carousel-snyk'
import {
  Accordion,
  AccordionElement,
  AccordionText,
  AccordionTitle,
} from 'mjml-accordion-snyk'
import Body from 'mjml-body-snyk'
import Head from 'mjml-head-snyk'
import HeadAttributes from 'mjml-head-attributes-snyk'
import HeadBreakpoint from 'mjml-head-breakpoint-snyk'
import HeadHtmlAttributes from 'mjml-head-html-attributes-snyk'
import HeadFont from 'mjml-head-font-snyk'
import HeadPreview from 'mjml-head-preview-snyk'
import HeadStyle from 'mjml-head-style-snyk'
import HeadTitle from 'mjml-head-title-snyk'
import Hero from 'mjml-hero-snyk'
import Button from 'mjml-button-snyk'
import Column from 'mjml-column-snyk'
import Divider from 'mjml-divider-snyk'
import Group from 'mjml-group-snyk'
import Image from 'mjml-image-snyk'
import Raw from 'mjml-raw-snyk'
import Section from 'mjml-section-snyk'
import Spacer from 'mjml-spacer-snyk'
import Text from 'mjml-text-snyk'
import Table from 'mjml-table-snyk'
import Wrapper from 'mjml-wrapper-snyk'
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
