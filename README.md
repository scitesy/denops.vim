<div align="center">
<img src="https://user-images.githubusercontent.com/3132889/113470275-51e30a00-948f-11eb-81bb-812986d131d5.png" width="300"><br>
<strong>Denops</strong><br>
<sup>An ecosystem of Vim/Neovim which allows developers to write plugins in Deno.</sup>

[![Deno 1.11.0 or above](https://img.shields.io/badge/Deno-Support%201.11.0-yellowgreen.svg?logo=deno)](https://github.com/denoland/deno/tree/v1.11.0)
[![Vim 8.1.2424 or above](https://img.shields.io/badge/Vim-Support%208.1.2424-yellowgreen.svg?logo=vim)](https://github.com/vim/vim/tree/v8.1.2424)
[![Neovim 0.4.4 or above](https://img.shields.io/badge/Neovim-Support%200.4.4-yellowgreen.svg?logo=neovim&logoColor=white)](https://github.com/neovim/neovim/tree/v0.4.4)

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![deno land](http://img.shields.io/badge/available%20on-deno.land/x/denops__core-lightgrey.svg?logo=deno)](https://deno.land/x/denops_core)

[![vim help](https://img.shields.io/badge/vim-%3Ah%20denops-orange.svg)](doc/denops.txt)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/denops_core/mod.ts)
[![Documentation](https://img.shields.io/badge/denops-Documentation-yellow.svg)](https://vim-denops.github.io/denops-documentation/)

[![deno](https://github.com/vim-denops/denops.vim/workflows/deno/badge.svg)](https://github.com/vim-denops/denops.vim/actions?query=workflow%3Adeno)
[![vim](https://github.com/vim-denops/denops.vim/workflows/vim/badge.svg)](https://github.com/vim-denops/denops.vim/actions?query=workflow%3Avim)
[![neovim](https://github.com/vim-denops/denops.vim/workflows/neovim/badge.svg)](https://github.com/vim-denops/denops.vim/actions?query=workflow%3Aneovim)
[![reviewdog](https://github.com/vim-denops/denops.vim/workflows/reviewdog/badge.svg)](https://github.com/vim-denops/denops.vim/actions?query=workflow%3Areviewdog)

</div>

## Quick start

First of all, install the latest [Deno][deno]. See
[Deno's official manual](https://deno.land/manual/getting_started/installation)
for details.

Note that `deno` command need to be executable from Vim/Neovim. You can confirm
it by `exepath()` function in Vim/Neovim like below:

```vim
:echo exepath('deno')
/usr/local/bin/deno
```

Or specify an absolute path to `g:denops#deno` variable (See
`:help g:denops#deno`.)

Once you got deno to work, install `vim-denops/denops.vim` as a general Vim
plugin. For example, the following uses [vim-plug][vim-plug]:

```vim
Plug 'vim-denops/denops.vim'
Plug 'vim-denops/denops-helloworld.vim'
```

Then you can confirm if denops is working properly by executing `HelloDenops`
command like:

```vim
:HelloDenops
Your name: John
Hello Denops. Your name is John. This is nvim
```

Once you've confirmed that denops is working, you can remove
`vim-denops/denops-helloworld.vim`.

[deno]: https://deno.land/
[vim-plug]: https://github.com/junegunn/vim-plug

## Documentations

To learn how to write Vim/Neovim plugins by denops, see
[Denops Documentation](https://vim-denops.github.io/denops-documentation/) or
[denops.vim Wiki](https://github.com/vim-denops/denops.vim/wiki).

## Developpers

Denops is mainly developped by members of [vim-jp][vim-jp].

## Inspired by

This ecosystem is strongly inspired by [coc.nvim][coc.nvim] which allows
developers to write Vim/Neovim plugin in [Node.js][node.js].

[coc.nvim]: https://github.com/neoclide/coc.nvim
[node.js]: https://nodejs.org/ja/
[vim-jp]: https://vim-jp.org/

## License

The code follows MIT license written in [LICENSE](./LICENSE). Contributors need
to agree that any modifications sent in this repository follow the license.
