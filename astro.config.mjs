// @ts-check

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    starlight({
      title: "Linux with Rust 101",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Hayao0819/linux-rust-101",
        },
      ],
      sidebar: [
        {
          label: "Part I: はじめに",
          items: [
            { label: "01. なぜカーネルを Rust で書くのか", slug: "part1-introduction/01-why-rust" },
            {
              label: "02. Rust for Linux プロジェクト概観",
              slug: "part1-introduction/02-rfl-overview",
            },
            { label: "03. 開発環境の構築", slug: "part1-introduction/03-setup" },
            {
              label: "36. カーネルブートプロセスと初期化",
              slug: "part1-introduction/36-boot-process",
            },
          ],
        },
        {
          label: "Part II: 最初のカーネルモジュール",
          items: [
            { label: "04. カーネルモジュール — C 版", slug: "part2-first-module/04-hello-c" },
            { label: "05. カーネルモジュール — Rust 版", slug: "part2-first-module/05-hello-rust" },
            { label: "06. kbuild と FFI の仕組み", slug: "part2-first-module/06-kbuild-ffi" },
          ],
        },
        {
          label: "Part III: カーネルの基礎概念",
          items: [
            { label: "07. プロセスと task_struct", slug: "part3-kernel-concepts/07-process" },
            { label: "08. メモリ管理", slug: "part3-kernel-concepts/08-memory" },
            { label: "09. 並行性と同期プリミティブ", slug: "part3-kernel-concepts/09-concurrency" },
            { label: "10. カーネルデータ構造", slug: "part3-kernel-concepts/10-data-structures" },
            {
              label: "30. システムコールの内部構造",
              slug: "part3-kernel-concepts/30-syscall-internals",
            },
            { label: "35. プロセス間通信 (IPC)", slug: "part3-kernel-concepts/35-ipc-mechanisms" },
            {
              label: "42. エラーハンドリング詳解",
              slug: "part3-kernel-concepts/42-error-handling",
            },
          ],
        },
        {
          label: "Part IV: デバイスドライバの基礎",
          items: [
            { label: "11. 文字デバイス — C 版", slug: "part4-device-drivers/11-chardev-c" },
            {
              label: "12. ブロッキング I/O と wait queue",
              slug: "part4-device-drivers/12-blocking-io",
            },
            { label: "13. 文字デバイス — Rust 版", slug: "part4-device-drivers/13-chardev-rust" },
            {
              label: "14. /proc, /sys, debugfs, Netlink",
              slug: "part4-device-drivers/14-interfaces",
            },
          ],
        },
        {
          label: "Part V: ハードウェアとの通信",
          items: [
            { label: "15. デバイスモデルと Device Tree", slug: "part5-hardware/15-device-model" },
            { label: "16. Platform / PCI / I2C / SPI ドライバ", slug: "part5-hardware/16-drivers" },
            { label: "17. I/O メモリと DMA", slug: "part5-hardware/17-mmio-dma" },
            { label: "18. 割り込み・タイマー・workqueue", slug: "part5-hardware/18-irq-timer-wq" },
            {
              label: "19. 電力管理とファームウェアロード",
              slug: "part5-hardware/19-power-firmware",
            },
          ],
        },
        {
          label: "Part VI: Rust カーネルプログラミング",
          items: [
            {
              label: "20. 所有権・unsafe・Safety Contract",
              slug: "part6-rust-kernel/20-ownership-unsafe",
            },
            { label: "21. Pin と pinned-init", slug: "part6-rust-kernel/21-pin" },
            { label: "22. マクロの読み解き", slug: "part6-rust-kernel/22-macros" },
          ],
        },
        {
          label: "Part VII: 観測とセキュリティ",
          items: [
            {
              label: "23. デバッグ・トレーシング・eBPF",
              slug: "part7-observability/23-debug-tracing",
            },
            { label: "24. カーネルセキュリティ", slug: "part7-observability/24-security" },
            {
              label: "37. カーネルの攻撃緩和メカニズム",
              slug: "part7-observability/37-kernel-hardening",
            },
            { label: "40. テストとファジング", slug: "part7-observability/40-testing-fuzzing" },
            { label: "41. 高度なデバッグ技法", slug: "part7-observability/41-advanced-debug" },
          ],
        },
        {
          label: "Part VIII: 実践と応用",
          items: [
            { label: "実習: echo デバイスを一から作る", slug: "part8-practice/25-lab-echo" },
            { label: "実習: タイマーと workqueue", slug: "part8-practice/26-lab-timer" },
            { label: "27. ケーススタディ", slug: "part8-practice/27-case-studies" },
            {
              label: "28. カーネルサブシステムと Rust の現在地",
              slug: "part8-practice/28-rust-frontiers",
            },
            { label: "29. upstream への道", slug: "part8-practice/29-upstream" },
            {
              label: "44. Rust for Linux 2026 年最新状況",
              slug: "part8-practice/44-rfl-2026-status",
            },
          ],
        },
        {
          label: "Part IX: サブシステム深掘り",
          items: [
            { label: "31. Namespaces と cgroups", slug: "part9-subsystems/31-namespaces-cgroups" },
            { label: "32. VFS とファイルシステム", slug: "part9-subsystems/32-vfs-fundamentals" },
            { label: "33. ネットワークスタック詳解", slug: "part9-subsystems/33-network-stack" },
            { label: "34. 暗号サブシステム", slug: "part9-subsystems/34-crypto-subsystem" },
            { label: "38. メモリ管理の深層", slug: "part9-subsystems/38-advanced-memory" },
            { label: "39. PREEMPT_RT", slug: "part9-subsystems/39-preempt-rt" },
            { label: "43. 仮想化と KVM", slug: "part9-subsystems/43-virtualization-kvm" },
          ],
        },
        {
          label: "付録",
          items: [
            { label: "A. コマンドチートシート", slug: "appendix/a-cheatsheet" },
            { label: "B. C ⇔ Rust 用語辞典", slug: "appendix/b-glossary" },
            { label: "C. API 早見表", slug: "appendix/c-api-reference" },
            { label: "D. 推奨副読本・動画", slug: "appendix/d-reading-list" },
            { label: "E. トラブルシューティング FAQ", slug: "appendix/e-faq" },
          ],
        },
      ],
    }),
  ],
});
