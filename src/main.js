import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const pbomlDomain = "https://pboml.opbo-bdpb.ca/"
async function fetchPbomlParserScriptUrl() {
    const response = await fetch(`${pbomlDomain}manifest.json`);
    const payload = await response.json();
    let mainScript;
    Object.values(payload).forEach((file) => {
        if (file?.isEntry)
            mainScript = file.file
    })
    return mainScript;
}
const mainScriptPath = await fetchPbomlParserScriptUrl();

const scriptEl = document.createElement('script');
scriptEl.setAttribute('src', `${pbomlDomain}${mainScriptPath}`);
scriptEl.setAttribute('type', "module");
scriptEl.setAttribute('crossorigin', 'anonymous');
document.body.appendChild(scriptEl);

createApp(App).mount('#app')
