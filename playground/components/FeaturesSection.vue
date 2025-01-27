<script setup lang="ts">
import {
  RocketIcon,
  ZapIcon,
  PaletteIcon,
  GaugeIcon,
  SearchIcon,
  GlobeIcon,
} from 'lucide-vue-next'

const keyFeatures = [
  {
    title: 'Effortless Integration',
    description: `Plug it in faster than you can solve a Rubik's cube (even if you're really good at Rubik's cubes)`,
    icon: RocketIcon,
  },
  {
    title: 'Real-time Translation',
    description: `Words change languages quicker than a chameleon changes colors`,
    icon: ZapIcon,
  },
  {
    title: 'Customizable UI',
    description: `Make it look so good, it could win a beauty pageant (if UIs had beauty pageants)`,
    icon: PaletteIcon,
  },
  {
    title: 'Speedster Performance',
    description: `It's fast. Like, "blink and you'll miss it" fast`,
    icon: GaugeIcon,
  },
  {
    title: 'SEO Superpowers',
    description: 'People will find your site more easily than their own keys',
    icon: SearchIcon,
  },
  {
    title: '100+ Languages',
    description: `From Ainu to Zulu, we've got tongues covered`,
    icon: GlobeIcon,
  },
]
</script>

<template>
  <section
    class="key-features"
    aria-labelledby="features-title"
  >
    <h2 id="features-title">
      Key Features
    </h2>
    <ul>
      <li
        v-for="feature in keyFeatures"
        :key="feature.title"
      >
        <div class="feature-icon">
          <component :is="feature.icon" />
        </div>
        <div class="feature-content">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.key-features {
  margin: 4rem 0;
}

.key-features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #00DC82;
  margin-bottom: 3rem;
}

.key-features ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  list-style-type: none;
  padding: 0;
}

.key-features li {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: flex-start;
}

.key-features li:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 220, 130, 0.1);
}

.feature-icon {
  background: rgba(0, 220, 130, 0.1);
  border-radius: 50%;
  padding: 0.75rem;
  margin-right: 1rem;
}

.feature-icon svg {
  width: 1.5rem;
  height: 1.5rem;
  color: #00DC82;
}

.feature-content {
  flex: 1;
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

@media (max-width: 1024px) {
  .key-features ul {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 640px) {
  .key-features h2 {
    font-size: 2rem;
  }

  .key-features ul {
    grid-template-columns: 1fr;
  }

  .key-features li {
    padding: 1.25rem;
  }

  .key-features h3 {
    font-size: 1.1rem;
  }

  .key-features p {
    font-size: 0.9rem;
  }
}
</style>
