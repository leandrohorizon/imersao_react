let titles = document.querySelectorAll('a#video-title');
titles = Array.from(titles).map((t)=>{return {titulo: t.title, url: t.href}});
JSON.stringify(titles);