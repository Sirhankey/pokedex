// const pokemonSprites = (sprites) => {
//     return {
//         front: {
//             default: sprites.front_default || null,
//             shiny: sprites.front_shiny || null,
//             shiny_female: sprites.front_shiny_female || null,
//             dream_world: sprites.other.dream_world.front_default || null,
//             home: {
//                 default: sprites.other.home.front_default || null,
//                 shiny: sprites.other.home.front_shiny || null,
//                 shiny_female: sprites.other.home.front_shiny_female || null,
//             },
//             official_artwork: {
//                 default: sprites.other["official-artwork"].front_default || null,
//                 shiny: sprites.other["official-artwork"].front_shiny || null,
//                 shiny_female: sprites.other["official-artwork"].front_shiny_female || null,
//             },
//             showdown: {
//                 default: sprites.other.showdown.front_default || null,
//                 shiny: sprites.other.showdown.front_shiny || null,
//                 shiny_female: sprites.other.showdown.front_shiny_female || null,
//             },
//             generation_i: {
//                 red_blue: {
//                     default: sprites.versions["generation-i"]["red-blue"].front_default || null,
//                     gray: sprites.versions["generation-i"]["red-blue"].front_gray || null,
//                 },
//                 yellow: {
//                     default: sprites.versions["generation-i"]["yellow"].front_default || null,
//                     gray: sprites.versions["generation-i"]["yellow"].front_gray || null,
//                 },
//             },
//             generation_ii: {
//                 crystal: {
//                     default: sprites.versions["generation-ii"]["crystal"].front_default || null,
//                     shiny: sprites.versions["generation-ii"]["crystal"].front_shiny || null,
//                 },
//                 gold: {
//                     default: sprites.versions["generation-ii"]["gold"].front_default || null,
//                     shiny: sprites.versions["generation-ii"]["gold"].front_shiny || null,
//                 },
//                 silver: {
//                     default: sprites.versions["generation-ii"]["silver"].front_default || null,
//                     shiny: sprites.versions["generation-ii"]["silver"].front_shiny || null,
//                 },
//             },
//             generation_iii: {
//                 emerald: {
//                     default: sprites.versions["generation-iii"]["emerald"].front_default || null,
//                     shiny: sprites.versions["generation-iii"]["emerald"].front_shiny || null,
//                 },
//                 firered_leafgreen: {
//                     default: sprites.versions["generation-iii"]["firered-leafgreen"].front_default || null,
//                     shiny: sprites.versions["generation-iii"]["firered-leafgreen"].front_shiny || null,
//                 },
//                 ruby_sapphire: {
//                     default: sprites.versions["generation-iii"]["ruby-sapphire"].front_default || null,
//                     shiny: sprites.versions["generation-iii"]["ruby-sapphire"].front_shiny || null,
//                 },
//             },
//             generation_iv: {
//                 diamond_pearl: {
//                     default: sprites.versions["generation-iv"]["diamond-pearl"].front_default || null,
//                     shiny: sprites.versions["generation-iv"]["diamond-pearl"].front_shiny || null,
//                 },
//                 heartgold_soulsilver: {
//                     default: sprites.versions["generation-iv"]["heartgold-soulsilver"].front_default || null,
//                     shiny: sprites.versions["generation-iv"]["heartgold-soulsilver"].front_shiny || null,
//                 },
//                 platinum: {
//                     default: sprites.versions["generation-iv"]["platinum"].front_default || null,
//                     shiny: sprites.versions["generation-iv"]["platinum"].front_shiny || null,
//                 },
//             },
//             generation_v: {
//                 black_white: {
//                     default: sprites.versions["generation-v"]["black-white"].front_default || null,
//                     shiny: sprites.versions["generation-v"]["black-white"].front_shiny || null,
//                 },
//             },
//             generation_vi: {
//                 omegaruby_alphasapphire: {
//                     default: sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_default || null,
//                     shiny: sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_shiny || null,
//                 },
//                 x_y: {
//                     default: sprites.versions["generation-vi"]["x-y"].front_default || null,
//                     shiny: sprites.versions["generation-vi"]["x-y"].front_shiny || null,
//                 },
//             },
//             generation_vii: {
//                 icons: {
//                     default: sprites.versions["generation-vii"]["icons"].front_default || null,
//                 },
//                 ultra_sun_ultra_moon: {
//                     default: sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default || null,
//                     shiny: sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_shiny || null,
//                 },
//             },
//             generation_viii: {
//                 icons: {
//                     default: sprites.versions["generation-viii"]["icons"].front_default || null,
//                 },
//             },
//             // Adicione mais gerações, se necessário
//         },
//         back: {
//             default: sprites.back_default || null,
//             shiny: sprites.back_shiny || null,
//             shiny_female: sprites.back_shiny_female || null,
//             dream_world: sprites.other.dream_world.back_default || null,
//             home: {
//                 default: sprites.other.home.back_default || null,
//                 shiny: sprites.other.home.back_shiny || null,
//                 shiny_female: sprites.other.home.back_shiny_female || null,
//             },
//             official_artwork: {
//                 default: sprites.other["official-artwork"].back_default || null,
//                 shiny: sprites.other["official-artwork"].back_shiny || null,
//                 shiny_female: sprites.other["official-artwork"].back_shiny_female || null,
//             },
//             showdown: {
//                 default: sprites.other.showdown.back_default || null,
//                 shiny: sprites.other.showdown.back_shiny || null,
//                 shiny_female: sprites.other.showdown.back_shiny_female || null,
//             },
//             generation_i: {
//                 red_blue: {
//                     default: sprites.versions["generation-i"]["red-blue"].back_default || null,
//                 },
//                 yellow: {
//                     default: sprites.versions["generation-i"]["yellow"].back_default || null,
//                 },
//             },
//             generation_ii: {
//                 crystal: {
//                     default: sprites.versions["generation-ii"]["crystal"].back_default || null,
//                     shiny: sprites.versions["generation-ii"]["crystal"].back_shiny || null,
//                 },
//                 gold: {
//                     default: sprites.versions["generation-ii"]["gold"].back_default || null,
//                     shiny: sprites.versions["generation-ii"]["gold"].back_shiny || null,
//                 },
//                 silver: {
//                     default: sprites.versions["generation-ii"]["silver"].back_default || null,
//                     shiny: sprites.versions["generation-ii"]["silver"].back_shiny || null,
//                 },
//             },
//             generation_iii: {
//                 emerald: {
//                     default: sprites.versions["generation-iii"]["emerald"].back_default || null,
//                     shiny: sprites.versions["generation-iii"]["emerald"].back_shiny || null,
//                 },
//                 firered_leafgreen: {
//                     default: sprites.versions["generation-iii"]["firered-leafgreen"].back_default || null,
//                     shiny: sprites.versions["generation-iii"]["firered-leafgreen"].back_shiny || null,
//                 },
//                 ruby_sapphire: {
//                     default: sprites.versions["generation-iii"]["ruby-sapphire"].back_default || null,
//                     shiny: sprites.versions["generation-iii"]["ruby-sapphire"].back_shiny || null,
//                 },
//             },
//             generation_iv: {
//                 diamond_pearl: {
//                     default: sprites.versions["generation-iv"]["diamond-pearl"].back_default || null,
//                     shiny: sprites.versions["generation-iv"]["diamond-pearl"].back_shiny || null,
//                 },
//                 heartgold_soulsilver: {
//                     default: sprites.versions["generation-iv"]["heartgold-soulsilver"].back_default || null,
//                     shiny: sprites.versions["generation-iv"]["heartgold-soulsilver"].back_shiny || null,
//                 },
//                 platinum: {
//                     default: sprites.versions["generation-iv"]["platinum"].back_default || null,
//                     shiny: sprites.versions["generation-iv"]["platinum"].back_shiny || null,
//                 },
//             },
//             generation_v: {
//                 black_white: {
//                     default: sprites.versions["generation-v"]["black-white"].back_default || null,
//                     shiny: sprites.versions["generation-v"]["black-white"].back_shiny || null,
//                 },
//             },
//             generation_vi: {
//                 omegaruby_alphasapphire: {
//                     default: sprites.versions["generation-vi"]["omegaruby-alphasapphire"].back_default || null,
//                     shiny: sprites.versions["generation-vi"]["omegaruby-alphasapphire"].back_shiny || null,
//                 },
//                 x_y: {
//                     default: sprites.versions["generation-vi"]["x-y"].back_default || null,
//                     shiny: sprites.versions["generation-vi"]["x-y"].back_shiny || null,
//                 },
//             },
//             generation_vii: {
//                 icons: {
//                     default: sprites.versions["generation-vii"]["icons"].back_default || null,
//                 },
//                 ultra_sun_ultra_moon: {
//                     default: sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].back_default || null,
//                     shiny: sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].back_shiny || null,
//                 },
//             },
//             generation_viii: {
//                 icons: {
//                     default: sprites.versions["generation-viii"]["icons"].back_default || null,
//                 },
//             },
//         },
//     };
// };

const pokemonSpritesSpread = (sprites) => {
    const frontImages = {
        front_default: sprites.front_default,
        front_female: sprites.front_female,
        front_shiny: sprites.front_shiny,
        front_shiny_female: sprites.front_shiny_female,
        dream_world_front_default: sprites.other.dream_world.front_default,
        home_front_default: sprites.other.home.front_default,
        home_front_female: sprites.other.home.front_female,
        home_front_shiny: sprites.other.home.front_shiny,
        home_front_shiny_female: sprites.other.home.front_shiny_female,
        official_artwork_front_default: sprites.other["official-artwork"].front_default,
        official_artwork_front_female: sprites.other["official-artwork"].front_female,
        official_artwork_front_shiny: sprites.other["official-artwork"].front_shiny,
        official_artwork_front_shiny_female: sprites.other["official-artwork"].front_shiny_female,
        showdown_front_default: sprites.other.showdown.front_default,
        showdown_front_female: sprites.other.showdown.front_female,
        showdown_front_shiny: sprites.other.showdown.front_shiny,
        showdown_front_shiny_female: sprites.other.showdown.front_shiny_female,
        generation_i_red_blue_front_default: sprites.versions["generation-i"]["red-blue"].front_default,
        generation_i_red_blue_front_gray: sprites.versions["generation-i"]["red-blue"].front_gray,
        generation_i_yellow_front_default: sprites.versions["generation-i"]["yellow"].front_default,
        generation_ii_crystal_front_default: sprites.versions["generation-ii"]["crystal"].front_default,
        generation_ii_crystal_front_shiny: sprites.versions["generation-ii"]["crystal"].front_shiny,
        generation_ii_gold_front_default: sprites.versions["generation-ii"]["gold"].front_default,
        generation_ii_gold_front_shiny: sprites.versions["generation-ii"]["gold"].front_shiny,
        generation_ii_silver_front_default: sprites.versions["generation-ii"]["silver"].front_default,
        generation_ii_silver_front_shiny: sprites.versions["generation-ii"]["silver"].front_shiny,
        generation_iii_emerald_front_default: sprites.versions["generation-iii"]["emerald"].front_default,
        generation_iii_emerald_front_shiny: sprites.versions["generation-iii"]["emerald"].front_shiny,
        generation_iii_firered_leafgreen_front_default: sprites.versions["generation-iii"]["firered-leafgreen"].front_default,
        generation_iii_firered_leafgreen_front_shiny: sprites.versions["generation-iii"]["firered-leafgreen"].front_shiny,
        generation_iii_ruby_sapphire_front_default: sprites.versions["generation-iii"]["ruby-sapphire"].front_default,
        generation_iii_ruby_sapphire_front_shiny: sprites.versions["generation-iii"]["ruby-sapphire"].front_shiny,
        generation_iv_diamond_pearl_front_default: sprites.versions["generation-iv"]["diamond-pearl"].front_default,
        generation_iv_diamond_pearl_front_shiny: sprites.versions["generation-iv"]["diamond-pearl"].front_shiny,
        generation_iv_heartgold_soulsilver_front_default: sprites.versions["generation-iv"]["heartgold-soulsilver"].front_default,
        generation_iv_heartgold_soulsilver_front_shiny: sprites.versions["generation-iv"]["heartgold-soulsilver"].front_shiny,
        generation_iv_platinum_front_default: sprites.versions["generation-iv"]["platinum"].front_default,
        generation_iv_platinum_front_shiny: sprites.versions["generation-iv"]["platinum"].front_shiny,
        generation_v_black_white_front_default: sprites.versions["generation-v"]["black-white"].front_default,
        generation_v_black_white_front_shiny: sprites.versions["generation-v"]["black-white"].front_shiny,
        generation_vi_omegaruby_alphasapphire_front_default: sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_default,
        generation_vi_omegaruby_alphasapphire_front_shiny: sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_shiny,
        generation_vi_x_y_front_default: sprites.versions["generation-vi"]["x-y"].front_default,
        generation_vi_x_y_front_shiny: sprites.versions["generation-vi"]["x-y"].front_shiny,
        generation_vii_icons_front_default: sprites.versions["generation-vii"]["icons"].front_default,
        generation_vii_ultra_sun_ultra_moon_front_default: sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default,
        generation_vii_ultra_sun_ultra_moon_front_shiny: sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_shiny,
        generation_viii_icons_front_default: sprites.versions["generation-viii"]["icons"].front_default,
        // Adicione aqui as demais imagens front
    };

    const backImages = {
        back_default: sprites.back_default,
        back_female: sprites.back_female,
        back_shiny: sprites.back_shiny,
        back_shiny_female: sprites.back_shiny_female,
        dream_world_back_default: sprites.other.dream_world.back_default,
        home_back_default: sprites.other.home.back_default,
        home_back_female: sprites.other.home.back_female,
        home_back_shiny: sprites.other.home.back_shiny,
        home_back_shiny_female: sprites.other.home.back_shiny_female,
        official_artwork_back_default: sprites.other["official-artwork"].back_default,
        official_artwork_back_female: sprites.other["official-artwork"].back_female,
        official_artwork_back_shiny: sprites.other["official-artwork"].back_shiny,
        official_artwork_back_shiny_female: sprites.other["official-artwork"].back_shiny_female,
        showdown_back_default: sprites.other.showdown.back_default,
        showdown_back_female: sprites.other.showdown.back_female,
        showdown_back_shiny: sprites.other.showdown.back_shiny,
        showdown_back_shiny_female: sprites.other.showdown.back_shiny_female,
        generation_i_red_blue_back_default: sprites.versions["generation-i"]["red-blue"].back_default,
        generation_i_yellow_back_default: sprites.versions["generation-i"]["yellow"].back_default,
        generation_ii_crystal_back_default: sprites.versions["generation-ii"]["crystal"].back_default,
        generation_ii_crystal_back_shiny: sprites.versions["generation-ii"]["crystal"].back_shiny,
        generation_ii_gold_back_default: sprites.versions["generation-ii"]["gold"].back_default,
        generation_ii_gold_back_shiny: sprites.versions["generation-ii"]["gold"].back_shiny,
        generation_ii_silver_back_default: sprites.versions["generation-ii"]["silver"].back_default,
        generation_ii_silver_back_shiny: sprites.versions["generation-ii"]["silver"].back_shiny,
        generation_iii_emerald_back_default: sprites.versions["generation-iii"]["emerald"].back_default,
        generation_iii_emerald_back_shiny: sprites.versions["generation-iii"]["emerald"].back_shiny,
        generation_iii_firered_leafgreen_back_default: sprites.versions["generation-iii"]["firered-leafgreen"].back_default,
        generation_iii_firered_leafgreen_back_shiny: sprites.versions["generation-iii"]["firered-leafgreen"].back_shiny,
        generation_iii_ruby_sapphire_back_default: sprites.versions["generation-iii"]["ruby-sapphire"].back_default,
        generation_iii_ruby_sapphire_back_shiny: sprites.versions["generation-iii"]["ruby-sapphire"].back_shiny,
        generation_iv_diamond_pearl_back_default: sprites.versions["generation-iv"]["diamond-pearl"].back_default,
        generation_iv_diamond_pearl_back_shiny: sprites.versions["generation-iv"]["diamond-pearl"].back_shiny,
        generation_iv_heartgold_soulsilver_back_default: sprites.versions["generation-iv"]["heartgold-soulsilver"].back_default,
        generation_iv_heartgold_soulsilver_back_shiny: sprites.versions["generation-iv"]["heartgold-soulsilver"].back_shiny,
        generation_iv_platinum_back_default: sprites.versions["generation-iv"]["platinum"].back_default,
        generation_iv_platinum_back_shiny: sprites.versions["generation-iv"]["platinum"].back_shiny,
        generation_v_black_white_back_default: sprites.versions["generation-v"]["black-white"].back_default,
        generation_v_black_white_back_shiny: sprites.versions["generation-v"]["black-white"].back_shiny,
        generation_vi_omegaruby_alphasapphire_back_default: sprites.versions["generation-vi"]["omegaruby-alphasapphire"].back_default,
        generation_vi_omegaruby_alphasapphire_back_shiny: sprites.versions["generation-vi"]["omegaruby-alphasapphire"].back_shiny,
        generation_vi_x_y_back_default: sprites.versions["generation-vi"]["x-y"].back_default,
        generation_vi_x_y_back_shiny: sprites.versions["generation-vi"]["x-y"].back_shiny,
        generation_vii_icons_back_default: sprites.versions["generation-vii"]["icons"].back_default,
        generation_vii_ultra_sun_ultra_moon_back_default: sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].back_default,
        generation_vii_ultra_sun_ultra_moon_back_shiny: sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].back_shiny,
        generation_viii_icons_back_default: sprites.versions["generation-viii"]["icons"].back_default,
    };

    return { frontImages, backImages };
};

export default pokemonSpritesSpread;

