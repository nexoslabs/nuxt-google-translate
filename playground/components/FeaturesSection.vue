<script type="ts" setup>
// Features list
const keyFeatures = [
  {
    title: '🚀 Effortless Integration',
    description: `Plug it in faster than you can solve a Rubik's cube (even if you're really good at Rubik's cubes)`,
  },
  {
    title: '⚡ Real-time Translation',
    description: `Words change languages quicker than a chameleon changes colors`,
  },
  {
    title: '🎨 Customizable UI',
    description: `Make it look so good, it could win a beauty pageant (if UIs had beauty pageants)`,
  },
  {
    title: '🏎️ Speedster Performance',
    description: `It's fast. Like, "blink and you'll miss it" fast`,
  },
  {
    title: '🔍 Translate Superpowers',
    description: 'People will love your site more than it loves its own logo',
  },
  {
    title: '🌈 100+ Languages',
    description: `From Ainu to Zulu, we've got tongues covered`,
  },
]
</script>

<template>
  <div class="key-features">
    <h2>Key Features</h2>
    <ul>
      <li
        v-for="feature in keyFeatures"
        :key="feature.title"
      >
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.key-features {
  margin: 4rem 0;
}

.key-features h2 {
  text-align: center;
  font-size: 2rem;
  color: #00DC82;
  margin-bottom: 2.5rem;
}

.key-features ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  list-style-type: none;
  padding: 0;
}

.key-features li {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.key-features li:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 220, 130, 0.1);
}

.key-features h3 {
  font-size: 1.25rem;
  color: #00DC82;
  margin-bottom: 0.5rem;
}

.key-features p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.hero-visual {
  flex: 1;
  max-width: 500px;
  height: 500px;
  position: relative;
}

@media (max-width: 1024px) {

  .key-features ul {
    grid-template-columns: 1fr;
  }
}
</style>
