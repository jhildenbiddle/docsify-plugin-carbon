(function(window) {
  window.DocsifyCarbon = {
    create(CarbonId, CarbonPlacement) {
      return function(hook, vm) {
        hook.ready(function() {
          window.DocsifyCarbon.injectCarbonStyle();
        });

        hook.doneEach(function() {
          window.DocsifyCarbon.injectCarbonScript(CarbonId, CarbonPlacement);
        });
      };
    },

    injectCarbonScript(CarbonId, CarbonPlacement) {
      const adEl = document.querySelector("#carbonads");
      const scriptID = "_carbonads_js";
      const sidebarEl = document.querySelector(".sidebar-nav");

      if (!adEl && sidebarEl) {
        let scriptEl = document.querySelector(`#${scriptID}`);

        if (scriptEl) {
          scriptEl = scriptEl.parentNode.removeChild(scriptEl);
        }
        else {
          scriptEl = document.createElement("script");
          scriptEl.src = `https://cdn.carbonads.com/carbon.js?serve=${CarbonId}&placement=${CarbonPlacement}`;
          scriptEl.async = "async";
          scriptEl.id = scriptID;
        }

        sidebarEl.insertBefore(scriptEl, sidebarEl.firstChild);
      }
    },

    injectCarbonStyle() {
      const style = document.createElement("style");

      style.textContent = `
        #carbonads {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;

          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
          Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
          width: 300px;
          height: 250px;
          text-align: center;
          background-color: #fff;
          box-shadow: inset 0 0 1px 1px hsla(0, 0%, 0%, .15);
        }

        #carbonads a {
          text-decoration: none;
          color: #111;
        }

        #carbonads a:hover {
          color: #111;
        }

        #carbonads span {
          display: block;

          overflow: hidden;
        }

        .carbon-img {
          display: block;
          margin: 0 0 8px;

          line-height: 1;
        }

        .carbon-img img {
          width: 150px;
          max-width: 150px !important;
          height: auto;
        }

        .carbon-text {
          display: block;
          margin-bottom: 8px;
          padding: 0 10px;

          font-size: 16px;
          font-weight: 500;
          line-height: 1.35;
        }

        .carbon-poweredby {
          display: block;
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          padding: 8px 6px;

          font-size: 8px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: .5px;
          text-transform: uppercase;
          color: #fff !important;
          background-color: hsl(246, 93%, 69%);
        }
      `;

      document.head.appendChild(style);
    },
  };
})(window);
