/* @author web@2dsd.ru | webtitov.ru */
'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const WebT = {};

  WebT.settings = {

  };

  WebT.elements = {
    scroll_links: document.querySelectorAll('a[href^="#"]'),

  };

  /** Anchor smooth scroll **/
  (() => {
    WebT.elements.scroll_links.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const offset = -30,
              element = document.querySelector(this.getAttribute('href')),
              target = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({top: target, behavior: 'smooth'});
      });
    });
  })();

  /** Put date info **/
  (() => {
    let dayNames = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
        monthNames = ["Janeiro", "Favereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        now = new Date(),
        dayOfTheWeek = now.getDay();

    now.setTime(now.getTime() - 0 * 24 * 60 * 60 * 1000);
    for (let i=0; i < document.querySelectorAll('.js-date').length; i++) {
      document.querySelectorAll('.js-date')[i].textContent = (dayNames[now.getDay()] + ", " + now.getDate() + " de " + monthNames[now.getMonth()] + " de " + now.getFullYear());
    }
  })();

});